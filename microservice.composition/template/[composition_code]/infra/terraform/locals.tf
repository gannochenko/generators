locals {
  namespace = "<%- composition_code_kebab %>-${var.env}"
  urlNamespace = var.env == "prod" ? "" : "${var.env}."
  baseurl = "${local.urlNamespace}<%- domain %>"
  proto = var.env == "prod" ? "https" : "http"
  staging = var.env == "prod" ? "" : "1"
}
