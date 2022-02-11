<% if (use_function) { %>
module "<%- application_code_tf %>_<%- function_name %>" {
  source = "./<%- function_name %>"
  path = "<%- path_part %>"
  api_gateway_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  api_gateway_root_resource_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- application_code_tf %>.execution_arn

  # variables
  CORS = var.CORS
  STAGE = var.STAGE
}
<% } %>

<% if (use_api) { %>
module "<%- application_code_tf %>_runAPI" {
  source = "./runAPI"
  path = "<%- api_path_prefix %>"
  api_gateway_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  api_gateway_root_resource_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- application_code_tf %>.execution_arn

  # variables
  CORS = var.CORS
  STAGE = var.STAGE
}
<% } %>

<% if (use_contact_form) { %>
module "<%- application_code_tf %>_sendMessage" {
  source = "./sendMessage"
  path = "message"
  api_gateway_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  api_gateway_root_resource_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- application_code_tf %>.execution_arn

  # variables
  CORS = var.CORS
  STAGE = var.STAGE
}
<% } %>
