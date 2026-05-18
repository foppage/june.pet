resource "docker_volume" "guestbook_data" {
  name = "guestbook-data"
  lifecycle {
    prevent_destroy = true
  }
}