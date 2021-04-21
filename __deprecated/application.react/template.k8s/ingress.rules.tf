    rule {
      host = local.<%- application_code_global_kebab %>-host
      http {
        path {
          path = "/"
          backend {
            service_name = "<%- application_code_global_kebab %>"
            service_port = local.<%- application_code_global_kebab %>-port
          }
        }
        path {
          path = "/.well-known"
          backend {
            service_name = "letsencrypt"
            service_port = 80
          }
        }
      }
    }
