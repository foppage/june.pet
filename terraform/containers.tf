resource "docker_container" "personal-site" {
  image = docker_image.personal_site.id
  name  = "personal-site"

  networks_advanced {
    name = docker_network.personal_internal.id
  }

  networks_advanced {
    name = docker_network.personal_external.id
  }

  depends_on = [
    docker_container.personal-pg
  ]

  env = [
    "DATABASE_URL=postgres://postgres:postgres@personal-pg:5432/postgres",
    "PUSHOVER_USER=${var.pushover_user}",
    "PUSHOVER_TOKEN=${var.pushover_token}"
  ]

}

resource "docker_container" "personal-admin" {
  image = docker_image.personal_admin.id
  name  = "personal-admin"

  networks_advanced {
    name = docker_network.personal_internal.id
  }

  networks_advanced {
    name = docker_network.personal_external.id
  }

  depends_on = [
    docker_container.personal-pg
  ]

  env = [
    "DATABASE_URL=postgres://postgres:postgres@personal-pg:5432/postgres"
  ]

}

resource "docker_container" "personal-pg" {
  image = docker_image.postgres.image_id
  name  = "personal-pg"

  volumes {
    volume_name = docker_volume.guestbook_data.id
    container_path = "/var/lib/postgresql"
  }

  networks_advanced {
    name = docker_network.personal_internal.id
  }

  env = [
    "POSTGRES_USER=postgres",
    "POSTGRES_PASSWORD=postgres",
    "POSTGRES_DB=postgres"
  ]

}