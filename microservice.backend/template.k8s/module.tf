module "<%- application_code_global_kebab %>" {
  source = "../../<%- application_folder %>/infra/terraform"

  namespace = local.namespace
  host = local.<%- application_code_global_kebab %>-host
  port = local.<%- application_code_global_kebab %>-port
}
