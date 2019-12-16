resource "kubernetes_ingress" "ingress" {
  metadata {
    name      = "<%- composition_code %>"
    namespace = local.namespace
  }

  spec {
//    rule {
//      host = local.app-front-host
//      http {
//        path {
//          path = "/"
//          backend {
//            service_name = "k8s-proj-front" # todo: rename to "front"
//            service_port = local.app-front-port
//          }
//        }
//        path {
//          path = "/.well-known"
//          backend {
//            service_name = "letsencrypt"
//            service_port = 80
//          }
//        }
//      }
//    }
    ### RULES ###

    tls {
      hosts       = local.hosts
      secret_name = "letsencrypt-certs"
    }
  }
}
