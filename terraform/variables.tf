variable "docker_host" {
  type = string
}

variable "pushover_user" {
  type = string
}

variable "pushover_token" {
  type = string
  sensitive = true
}

variable "cloudflare_account" {
  type = string
}

variable "cloudflare_api_token" {
  type = string
  sensitive = true
}

variable "cloudflare_zone_id" {
  type = string
}

variable "allowed_email" {
  type = string
}