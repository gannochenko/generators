resource "kubernetes_ingress" "ingress" {
  metadata {
    name      = "<%- composition_code %>"
    namespace = local.namespace
  }

  spec {
    ### RULES ###

    tls {
      hosts       = local.hosts
      secret_name = "letsencrypt-certs"
    }
  }
}
