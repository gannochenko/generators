resource "kubernetes_namespace" "namespace" {
  metadata {
    annotations = {
      name = "k8s-proj-${var.env}"
    }

    labels = {
      name = "k8s-proj-${var.env}"
    }

    name = "k8s-proj-${var.env}"
  }
}
