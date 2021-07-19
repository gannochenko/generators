resource "aws_api_gateway_resource" "<%- project_code_kebab %>_contactForm" {
  rest_api_id = var.api_gateway_id
  parent_id = var.api_gateway_root_resouce_id
  path_part = "contactForm"
}

resource "aws_api_gateway_method" "<%- project_code_kebab %>_contactForm" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_resource.<%- project_code_kebab %>.id
  http_method = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "<%- project_code_kebab %>_contactForm" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_method.<%- project_code_kebab %>_contactForm.resource_id
  http_method = aws_api_gateway_method.<%- project_code_kebab %>_contactForm.http_method

  integration_http_method = "POST"
  type = "AWS_PROXY"
  uri = aws_lambda_function.contactForm.invoke_arn

  depends_on = [
    aws_api_gateway_method.<%- project_code_kebab %>_contactForm
  ]
}

resource "aws_lambda_permission" "<%- project_code_kebab %>_contactForm" {
  statement_id  = "AllowAPIGatewayInvoke"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.<%- project_code_kebab %>.function_name
  principal = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${var.api_gateway_execution_arn}/*/*"
  depends_on = [
    aws_lambda_function.contactForm
  ]
}
