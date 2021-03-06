<% if (use_function) { %>
module "<%- application_code_tf %>_<%- function_name %>" {
  source = "./<%- function_name %>"

  api_gateway_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  api_gateway_root_resouce_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- application_code_tf %>.execution_arn
  stage_name = var.stage_name
  cors = "https://${var.apex_domain}/"
  s3_bucket = var.aws_lambda_bucket
  aws_iam_role_lambda_arn = var.aws_iam_role_lambda_arn
}
<% } %>

<% if (use_contact_form) { %>
module "<%- application_code_tf %>_sendMessage" {
  source = "./sendMessage"

  api_gateway_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  api_gateway_root_resource_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- application_code_tf %>.execution_arn
  stage_name = var.stage_name
  cors = "https://${var.apex_domain}/"
  s3_bucket = var.aws_lambda_bucket
  aws_iam_role_lambda_arn = var.aws_iam_role_lambda_arn
}
<% } %>
