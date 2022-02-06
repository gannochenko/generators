// example of how to make parameters:
// https://stackoverflow.com/questions/39040739/in-terraform-how-do-you-specify-an-api-gateway-endpoint-with-a-variable-in-the

resource "aws_api_gateway_resource" "<%- application_code_tf %>_run-api" {
  rest_api_id = var.api_gateway_id
  parent_id = var.api_gateway_root_resource_id
  path_part = var.path
}

resource "aws_api_gateway_resource" "<%- application_code_tf %>_run-api_proxy" {
  rest_api_id = var.api_gateway_id
  parent_id = aws_api_gateway_resource.<%- application_code_tf %>_run-api.id
  path_part = "{proxy+}"
}

resource "aws_api_gateway_method" "<%- application_code_tf %>_run-api" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_resource.<%- application_code_tf %>_run-api_proxy.id
  http_method = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "<%- application_code_tf %>_run-api" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_method.<%- application_code_tf %>_run-api.resource_id
  http_method = aws_api_gateway_method.<%- application_code_tf %>_run-api.http_method

  integration_http_method = aws_api_gateway_method.<%- application_code_tf %>_run-api.http_method
  type = "AWS_PROXY"
  uri = aws_lambda_function.<%- application_code_tf %>_run-api.invoke_arn

  request_parameters = {
    "integration.request.header.Accept" = "'*/*'",
    # "integration.request.header.Content-Type" = "method.request.header.Content-Type",
  }

  depends_on = [
    aws_api_gateway_method.<%- application_code_tf %>_run-api
  ]
}

resource "aws_lambda_permission" "<%- application_code_tf %>_run-api" {
  statement_id = "AllowAPIGatewayInvoke"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.<%- application_code_tf %>_run-api.function_name
  principal = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${var.api_gateway_execution_arn}/*/*"
  depends_on = [
    aws_lambda_function.<%- application_code_tf %>_run-api
  ]
}
