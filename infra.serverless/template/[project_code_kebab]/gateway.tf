resource "aws_api_gateway_rest_api" "<%- project_code_kebab %>" {
  name = local.code
}

resource "aws_api_gateway_resource" "<%- project_code_kebab %>_dummy" {
  rest_api_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  parent_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.root_resource_id
  path_part = "dummy"
}

resource "aws_api_gateway_method" "<%- project_code_kebab %>_dummy" {
  rest_api_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  resource_id = aws_api_gateway_resource.<%- project_code_kebab %>_dummy.id
  http_method = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "<%- project_code_kebab %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  resource_id   = aws_api_gateway_resource.<%- project_code_kebab %>_dummy.id
  http_method   = aws_api_gateway_method.<%- project_code_kebab %>_dummy.http_method
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
    aws_api_gateway_method.<%- project_code_kebab %>_dummy
  ]
}

resource "aws_api_gateway_integration" "<%- project_code_kebab %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  resource_id   = aws_api_gateway_resource.<%- project_code_kebab %>_dummy.id
  http_method   = aws_api_gateway_method.<%- project_code_kebab %>_dummy.http_method
  type          = "MOCK"
  request_templates = {
    "application/json" = "{\"statusCode\": 200}"
  }
  passthrough_behavior = "NEVER"
  depends_on = [
    aws_api_gateway_method.<%- project_code_kebab %>_dummy
  ]
}

resource "aws_api_gateway_integration_response" "<%- project_code_kebab %>_dummy" {
  rest_api_id   = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  resource_id   = aws_api_gateway_resource.<%- project_code_kebab %>_dummy.id
  http_method   = aws_api_gateway_method.<%- project_code_kebab %>_dummy.http_method
  status_code   = aws_api_gateway_method_response.<%- project_code_kebab %>_dummy.status_code
  response_parameters = {
//    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'GET'",
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
  depends_on = [
    aws_api_gateway_method_response.<%- project_code_kebab %>_dummy
  ]
}

resource "aws_api_gateway_deployment" "<%- project_code_kebab %>" {
  rest_api_id = aws_api_gateway_rest_api.<%- project_code_kebab %>.id
  stage_name  = var.stage_name
}

output "api_gateway_deployment_invoke_url" {
  value = aws_api_gateway_deployment.<%- project_code_kebab %>.invoke_url
}
