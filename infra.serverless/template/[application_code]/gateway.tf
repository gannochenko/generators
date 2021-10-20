resource "aws_api_gateway_rest_api" "<%- application_code_tf %>" {
  name = "<%- application_code_tf %>"
  binary_media_types = ["multipart/form-data", "image/png", "image/jpeg"]
}

resource "aws_api_gateway_resource" "<%- application_code_tf %>_dummy" {
  rest_api_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  parent_id = aws_api_gateway_rest_api.<%- application_code_tf %>.root_resource_id
  path_part = "dummy"
}

resource "aws_api_gateway_method" "<%- application_code_tf %>_dummy" {
  rest_api_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  resource_id = aws_api_gateway_resource.<%- application_code_tf %>_dummy.id
  http_method = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "<%- application_code_tf %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  resource_id   = aws_api_gateway_resource.<%- application_code_tf %>_dummy.id
  http_method   = aws_api_gateway_method.<%- application_code_tf %>_dummy.http_method
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
    aws_api_gateway_method.<%- application_code_tf %>_dummy
  ]
}

resource "aws_api_gateway_integration" "<%- application_code_tf %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  resource_id   = aws_api_gateway_resource.<%- application_code_tf %>_dummy.id
  http_method   = aws_api_gateway_method.<%- application_code_tf %>_dummy.http_method
  type          = "MOCK"
  request_templates = {
    "application/json" = "{\"statusCode\": 200}"
  }
  passthrough_behavior = "NEVER"
  depends_on = [
    aws_api_gateway_method.<%- application_code_tf %>_dummy
  ]
}

resource "aws_api_gateway_integration_response" "<%- application_code_tf %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  resource_id   = aws_api_gateway_resource.<%- application_code_tf %>_dummy.id
  http_method   = aws_api_gateway_method.<%- application_code_tf %>_dummy.http_method
  status_code   = aws_api_gateway_method_response.<%- application_code_tf %>_dummy.status_code
  response_parameters = {
//    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'GET'",
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
  depends_on = [
    aws_api_gateway_method_response.<%- application_code_tf %>_dummy
  ]
}

resource "aws_api_gateway_deployment" "<%- application_code_tf %>" {
  rest_api_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
}

resource "aws_api_gateway_stage" "<%- application_code_tf %>" {
  deployment_id = aws_api_gateway_deployment.<%- application_code_tf %>.id
  rest_api_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  stage_name = var.stage_name
}

resource "aws_api_gateway_method_settings" "<%- application_code_tf %>" {
  rest_api_id = aws_api_gateway_rest_api.<%- application_code_tf %>.id
  stage_name  = aws_api_gateway_stage.<%- application_code_tf %>.stage_name
  method_path = "*/*"

  settings {
    metrics_enabled = true
    logging_level   = "INFO"
  }
}
