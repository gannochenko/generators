output "api_gateway_deployment_invoke_url" {
  value = aws_api_gateway_deployment.<%- application_code_tf %>.invoke_url
}
