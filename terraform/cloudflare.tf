resource "cloudflare_zero_trust_tunnel_cloudflared" "tunnel" {
  account_id = var.cloudflare_account
  name       = "june.pet website"
  config_src = "cloudflare"
}

data "cloudflare_zero_trust_tunnel_cloudflared_token" "tunnel_token" {
  account_id = var.cloudflare_account
  tunnel_id = cloudflare_zero_trust_tunnel_cloudflared.tunnel.id
}


resource "cloudflare_zero_trust_tunnel_cloudflared_config" "tunnel_config" {
  account_id = var.cloudflare_account
  tunnel_id  = cloudflare_zero_trust_tunnel_cloudflared.tunnel.id

  config = {
    ingress = [
      {
        hostname = "june.pet"
        service  = "http://site:80",
      },
      {
        hostname = "admin.june.pet"
        service  = "http://admin:80",
      },
      {
        service = "http_status:404"
      }
    ]
  }
}

resource "cloudflare_dns_record" "tunnel_record" {
  zone_id = var.cloudflare_zone_id
  for_each = toset(["@", "admin"])
  name = each.value
  content = "${cloudflare_zero_trust_tunnel_cloudflared.tunnel.id}.cfargotunnel.com"
  proxied = true
  type = "CNAME"
  ttl = 1
}

resource "cloudflare_zero_trust_access_policy" "allow_emails" {
  account_id   = var.cloudflare_account
  name         = "Allow email addresses"
  decision     = "allow"
  include      = [
    {
      email = {
        email = var.allowed_email
      }
    }
  ]
}


resource "cloudflare_zero_trust_access_application" "admin_panel" {
  account_id = var.cloudflare_account
  name       = "june.pet admin"
  domain     = "admin.june.pet"

  policies = [
    {
      id = cloudflare_zero_trust_access_policy.allow_emails.id
      precedence = 1
    }
  ]

  type = "self_hosted"
  session_duration            = "1m"
}

resource "docker_image" "tunnel_image" {
  name = "cloudflare/cloudflared:latest"
}

resource "docker_container" "tunnel_container" {
  image = docker_image.tunnel_image.image_id
  name  = "tunnel"

  networks_advanced {
    name = docker_network.external.id
  }

  command = ["tunnel", "--no-autoupdate", "run", "--token", data.cloudflare_zero_trust_tunnel_cloudflared_token.tunnel_token.token]
}