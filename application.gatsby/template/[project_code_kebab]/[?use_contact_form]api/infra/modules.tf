module "contact_form_submit" {
  source = "./lambdas/contactFormSubmit"

  api_gateway_id = aws_api_gateway_rest_api.<%- project_code %>.id
  api_gateway_root_resouce_id = aws_api_gateway_rest_api.<%- project_code %>.root_resource_id
  api_gateway_execution_arn = aws_api_gateway_rest_api.<%- project_code %>.execution_arn
  stage_name = var.stage_name
  cors = "https://<%- project_domain %>/"
}
