resource "kubernetes_namespace" "namespace" {
  metadata {
    annotations = {
      name = local.namespace
    }

    labels = {
      name = local.namespace
    }

    name = local.namespace
  }
}
