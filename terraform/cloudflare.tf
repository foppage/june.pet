// tunnel

resource "cloudflare_zero_trust_tunnel_cloudflared" "tunnel" {
  account_id = var.cloudflare_account_id
  name       = "june.pet website"
  config_src = "cloudflare"
}

data "cloudflare_zero_trust_tunnel_cloudflared_token" "tunnel_token" {
  account_id = var.cloudflare_account_id
  tunnel_id = cloudflare_zero_trust_tunnel_cloudflared.tunnel.id
}


resource "cloudflare_zero_trust_tunnel_cloudflared_config" "tunnel_config" {
  account_id = var.cloudflare_account_id
  tunnel_id  = cloudflare_zero_trust_tunnel_cloudflared.tunnel.id

  config = {
    ingress = [
      {
        hostname = "june.pet"
        service  = "http://${docker_container.site.hostname}:3000",
      },
      {
        hostname = "admin.june.pet"
        service  = "http://${docker_container.admin.hostname}:3000",
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

// access control

resource "cloudflare_zero_trust_access_policy" "allow_emails" {
  account_id   = var.cloudflare_account_id
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

resource "cloudflare_zero_trust_access_identity_provider" "oidc" {
  account_id = var.cloudflare_account_id
  zone_id = var.cloudflare_zone_id
  name = "Pocket ID"
  type = "oidc"

  config = {
    client_id = var.oidc_client_id
    client_secret = var.oidc_client_secret
    auth_url = var.oidc_auth_url
    token_url = var.oidc_token_url
    certs_url = var.oidc_certs_url
    pkce_enabled = true
  }

}

resource "cloudflare_zero_trust_access_application" "admin_panel" {
  account_id = var.cloudflare_account_id
  name       = "june.pet admin"
  domain     = "admin.june.pet"

  allowed_idps = [cloudflare_zero_trust_access_identity_provider.oidc.id]

  policies = [
    {
      id = cloudflare_zero_trust_access_policy.allow_emails.id
      precedence = 1
    }
  ]

  type = "self_hosted"
  session_duration = "1m"
}

// docker

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