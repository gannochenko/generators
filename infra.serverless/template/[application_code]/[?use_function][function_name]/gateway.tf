resource "aws_api_gateway_resource" "<%- application_code_tf %>_<%- gateway_resource_name %>" {
  rest_api_id = var.api_gateway_id
  parent_id = var.api_gateway_root_resource_id
  path_part = var.path
}

resource "aws_api_gateway_method" "<%- application_code_tf %>_<%- gateway_resource_name %>" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_resource.<%- application_code_tf %>_<%- gateway_resource_name %>.id
  http_method = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "<%- application_code_tf %>_<%- gateway_resource_name %>" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_method.<%- application_code_tf %>_<%- gateway_resource_name %>.resource_id
  http_method = aws_api_gateway_method.<%- application_code_tf %>_<%- gateway_resource_name %>.http_method

  integration_http_method = aws_api_gateway_method.<%- application_code_tf %>_<%- gateway_resource_name %>.http_method
  type = "AWS_PROXY"
  uri = aws_lambda_function.<%- application_code_tf %>_<%- function_name_tf %>.invoke_arn

  depends_on = [
    aws_api_gateway_method.<%- application_code_tf %>_<%- gateway_resource_name %>
  ]
}

resource "aws_lambda_permission" "<%- application_code_tf %>_<%- function_name_tf %>" {
  statement_id  = "AllowAPIGatewayInvoke"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.<%- application_code_tf %>_<%- function_name_tf %>.function_name
  principal = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${var.api_gateway_execution_arn}/*/*"
  depends_on = [
    aws_lambda_function.<%- application_code_tf %>_<%- function_name_tf %>
  ]
}
