How to use in terraform:

~~~
module "serverless.application" {
  source = "./serverless.application"

  apex_domain = local.applications_apex_domain
  repository = local.routine_repository

  stage_name = var.stage_name
  aws_region = local.aws_region
  aws_lambda_bucket = local.aws_lambda_bucket
  aws_iam_role_lambda_arn = aws_iam_role.lambda.arn
}
~~~
