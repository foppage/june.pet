resource "docker_container" "site" {
  image = docker_image.site.image_id
  name  = "site"

  networks_advanced {
    name = docker_network.internal.id
  }

  networks_advanced {
    name = docker_network.external.id
  }

  depends_on = [
    docker_container.guestbook_pg
  ]

  env = [
    "DATABASE_URL=postgres://postgres:postgres@${docker_container.guestbook_pg.hostname}:5432/postgres",
    "PUSHOVER_USER=${var.pushover_user}",
    "PUSHOVER_TOKEN=${var.pushover_token}"
  ]

}

resource "docker_container" "admin" {
  image = docker_image.admin.image_id
  name  = "admin"

  networks_advanced {
    name = docker_network.internal.id
  }

  networks_advanced {
    name = docker_network.external.id
  }

  depends_on = [
    docker_container.guestbook_pg
  ]

  env = [
    "DATABASE_URL=postgres://postgres:postgres@${docker_container.guestbook_pg.hostname}:5432/postgres"
  ]

}

resource "docker_container" "guestbook_pg" {
  image = docker_image.postgres.image_id
  name  = "guestbook-pg"

  volumes {
    volume_name = docker_volume.guestbook_data.id
    container_path = "/var/lib/postgresql"
  }

  networks_advanced {
    name = docker_network.internal.id
  }

  env = [
    "POSTGRES_USER=postgres",
    "POSTGRES_PASSWORD=postgres",
    "POSTGRES_DB=postgres"
  ]

}