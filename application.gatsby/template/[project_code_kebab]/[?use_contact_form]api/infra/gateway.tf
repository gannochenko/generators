# API Gateway for the function
resource "aws_api_gateway_rest_api" "<%- project_code %>" {
  name        = "<%- project_name %>"
  description = "<%- project_name %>"
}

resource "aws_api_gateway_account" "<%- project_code %>" {
  cloudwatch_role_arn = aws_iam_role.cloudwatch.arn
}

output "base_url" {
  value = module.contact_form_submit.api_gateway_deployment_invoke_url
}
