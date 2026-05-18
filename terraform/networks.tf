resource "docker_network" "personal_external" {
  name = "personal-external"
}

resource "docker_network" "personal_internal" {
  name = "personal-internal"
}