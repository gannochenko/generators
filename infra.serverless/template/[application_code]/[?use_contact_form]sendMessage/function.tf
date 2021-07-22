resource "aws_lambda_function" "sendMessage" {
  function_name = local.lambda_function_name

  filename = "function-dummy-src.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = var.aws_iam_role_lambda_arn

  environment {
    variables = {
      CORS = var.cors
    }
  }
}
