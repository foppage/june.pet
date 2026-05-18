terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "4.4.0"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = ">= 5.8.2"
    }
  }
}

provider "docker" {
  host = "ssh://root@${var.docker_host}:22"
  ssh_opts = ["-o", "StrictHostKeyChecking=no", "-o", "UserKnownHostsFile=/dev/null"]
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}