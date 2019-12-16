resource "kubernetes_service" "<%- application_code_global_kebab ->" {
  metadata {
    name = "<%- application_code_global_kebab ->"
    namespace = var.namespace
  }
  spec {
    selector = {
      name = "<%- application_code_global_kebab ->"
    }
    port {
      port = var.port
    }
  }
}
