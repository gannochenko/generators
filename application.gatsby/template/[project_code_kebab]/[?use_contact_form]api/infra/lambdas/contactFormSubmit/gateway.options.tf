resource "aws_api_gateway_method" "contact_form_submit_options" {
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.contact_form_submit.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "contact_form_submit_options_200" {
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.contact_form_submit.id
  http_method   = aws_api_gateway_method.contact_form_submit_options.http_method
  status_code   = 200
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin" = true
  }
  depends_on = [
    aws_api_gateway_method.contact_form_submit_options
  ]
}

resource "aws_api_gateway_integration" "contact_form_submit_options" {
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.contact_form_submit.id
  http_method   = aws_api_gateway_method.contact_form_submit_options.http_method
  type          = "MOCK"
  request_templates = {
    "application/json" = "{\"statusCode\": 200}"
  }
  passthrough_behavior = "NEVER"
  depends_on = [
    aws_api_gateway_method.contact_form_submit_options
  ]
}

resource "aws_api_gateway_integration_response" "contact_form_submit_options" {
  rest_api_id   = var.api_gateway_id
  resource_id   = aws_api_gateway_resource.contact_form_submit.id
  http_method   = aws_api_gateway_method.contact_form_submit_options.http_method
  status_code   = aws_api_gateway_method_response.contact_form_submit_options_200.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'OPTIONS,POST'",
    "method.response.header.Access-Control-Allow-Origin" = "'${var.cors}'"
  }
  depends_on = [
    aws_api_gateway_method_response.contact_form_submit_options_200
  ]
}
