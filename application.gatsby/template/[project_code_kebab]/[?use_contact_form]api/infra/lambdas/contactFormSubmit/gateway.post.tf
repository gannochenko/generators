resource "aws_api_gateway_method" "contact_form_submit_post" {
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.contact_form_submit.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "contact_form_submit_post" {
  rest_api_id = var.api_gateway_id
  resource_id = aws_api_gateway_method.contact_form_submit_post.resource_id
  http_method = aws_api_gateway_method.contact_form_submit_post.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.contact_form_submit.invoke_arn

  depends_on = [
    aws_api_gateway_method.contact_form_submit_post
  ]
}

resource "aws_lambda_permission" "contact_form_submit_lambda_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form_submit.function_name
  principal     = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${var.api_gateway_execution_arn}/*/*"
  depends_on = [
    aws_lambda_function.contact_form_submit
  ]
}
