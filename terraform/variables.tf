variable "pushover_user" {
  type = string
}

variable "pushover_token" {
  type = string
  sensitive = true
}

variable "cloudflare_account_id" {
  type = string
}

variable "cloudflare_api_token" {
  type = string
  sensitive = true
}

variable "oidc_client_id" {
 type = string
}

variable "oidc_client_secret" {
  type = string
  sensitive = true
}

variable "oidc_auth_url" {
  type = string

}

variable "oidc_token_url" {
  type = string

}

variable "oidc_certs_url" {
  type = string

}


variable "cloudflare_zone_id" {
  type = string
}

variable "allowed_email" {
  type = string
}