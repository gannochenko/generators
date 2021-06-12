module "<%- project_code_kebab %>_<%- function_name %>" {
  source = "<%- function_name %>"

  api_gateway_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  api_gateway_root_resouce_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- project_code_kebab %>.execution_arn
  stage_name = var.stage_name
  cors = "https://<%- project_code_kebab %>.${var.apex_domain}/"
  s3_bucket = var.aws_lambda_bucket
  aws_iam_role_lambda_arn = var.aws_iam_role_lambda_arn
}
