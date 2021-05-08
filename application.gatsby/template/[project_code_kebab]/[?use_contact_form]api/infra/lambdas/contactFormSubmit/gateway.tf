resource "aws_api_gateway_resource" "contact_form_submit" {
  rest_api_id = var.api_gateway_id
  parent_id   = var.api_gateway_root_resouce_id
  path_part   = "contact-form-submit"
}

resource "aws_api_gateway_deployment" "contact_form_submit" {
  depends_on = [
    aws_api_gateway_integration.contact_form_submit_options,
    aws_api_gateway_integration.contact_form_submit_post,
  ]

  rest_api_id = var.api_gateway_id
  stage_name  = var.stage_name
}
