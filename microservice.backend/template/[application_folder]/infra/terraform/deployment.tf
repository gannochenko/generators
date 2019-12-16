resource "kubernetes_deployment" "<%- application_code_global_kebab ->" {
  metadata {
    name = "<%- application_code_global_kebab ->"
    namespace = var.namespace
    labels = {
      name = "<%- application_code_global_kebab ->"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        name = "<%- application_code_global_kebab ->"
      }
    }

    template {
      metadata {
        namespace = var.namespace
        labels = {
          name = "<%- application_code_global_kebab ->"
        }
      }

      spec {
        container {
          image = "<%- vendor_name %>/<%- application_code_global %>:${local.version}"
          name  = "<%- application_code_global_kebab ->"

          env {
            name = "NETWORK__HOST"
            value = var.host
          }

          env {
            name = "NETWORK__PORT"
            value = var.port
          }

          env {
            name = "NETWORK__CORS"
            value = ""
          }

          env {
            name = "DATABASE__URL"
            value = ""
          }

          liveness_probe {
            http_get {
              path = "/health"
              port = var.port
            }

            initial_delay_seconds = 3
            period_seconds        = 3
          }
        }
      }
    }
  }
}
