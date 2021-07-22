resource "aws_api_gateway_resource" "<%- application_code_tf %>_message" {
  rest_api_id = var.api_gateway_id
  parent_id = var.api_gateway_root_resource_id
  path_part = "message"
}

resource "aws_api_gateway_method" "<%- application_code_tf %>_message" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_resource.<%- application_code_tf %>_message.id
  http_method = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "<%- application_code_tf %>_message" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_method.<%- application_code_tf %>_message.resource_id
  http_method = aws_api_gateway_method.<%- application_code_tf %>_message.http_method

  integration_http_method = "POST"
  type = "AWS_PROXY"
  uri = aws_lambda_function.sendMessage.invoke_arn

  depends_on = [
    aws_api_gateway_method.<%- application_code_tf %>_message
  ]
}

resource "aws_lambda_permission" "<%- application_code_tf %>_message" {
  statement_id  = "AllowAPIGatewayInvoke"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.sendMessage.function_name
  principal = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${var.api_gateway_execution_arn}/*/*"
  depends_on = [
    aws_lambda_function.sendMessage
  ]
}
