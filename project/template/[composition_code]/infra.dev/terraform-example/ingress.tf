resource "kubernetes_ingress" "ingress" {
  metadata {
    name      = "ingress"
    namespace = local.namespace
  }

  spec {
/* PH:RULES */

    tls {
      hosts       = local.hosts
      secret_name = "letsencrypt-certs"
    }
  }
}
