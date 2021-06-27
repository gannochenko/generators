resource "aws_lambda_function" "contactForm" {
  function_name = local.lambda_function_name

  s3_bucket = var.s3_bucket
  s3_key = "contactForm/latest.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = var.aws_iam_role_lambda_arn
}
