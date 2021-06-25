resource "aws_lambda_function" "<%- function_name %>" {
  function_name = local.lambda_function_name

  s3_bucket = var.s3_bucket
  s3_key = "dostuff/latest.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = var.aws_iam_role_lambda_arn
}
