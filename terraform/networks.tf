resource "docker_network" "external" {
  name = "external"
}

resource "docker_network" "internal" {
  name = "internal"
}