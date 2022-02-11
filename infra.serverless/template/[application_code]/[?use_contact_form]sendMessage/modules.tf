module "<%- application_code_tf %>_send-message_gateway_cors" {
  source = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id = var.api_gateway_id
  api_resource_id = aws_api_gateway_resource.<%- application_code_tf %>_message.id
  allow_origin = var.CORS
}
