resource "docker_image" "site" {
  name = "site"
  build {
    context = ".."
    dockerfile = "./docker/website.Dockerfile"
    build_arg = {
      DATABASE_URL: "postgres://postgres:postgres@${docker_container.guestbook_pg.hostname}/postgres"
    }
  }
  triggers = {
    site_sha1 = sha1(join("", [for f in fileset(path.module, "../packages/site/**") : filesha1(f)]))
    shared_sha1 = sha1(join("", [for f in fileset(path.module, "../packages/shared/**") : filesha1(f)]))
  }
}

resource "docker_image" "admin" {
  name = "admin"
  build {
    context = ".."
    dockerfile = "./docker/admin.Dockerfile"
    build_arg = {
      DATABASE_URL: "postgres://postgres:postgres@${docker_container.guestbook_pg.hostname}/postgres"
    }
  }
  triggers = {
    admin_sha1 = sha1(join("", [for f in fileset(path.module, "../packages/admin/**") : filesha1(f)]))
    shared_sha1 = sha1(join("", [for f in fileset(path.module, "../packages/shared/**") : filesha1(f)]))
  }
}

resource "docker_image" "postgres" {
  name = "postgres:latest"
}