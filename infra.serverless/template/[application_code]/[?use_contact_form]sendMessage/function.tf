resource "aws_lambda_function" "sendMessage" {
  function_name = "<%- application_code_tf %>_sendMessage"

  filename = "lambda-function-dummy.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = aws_iam_role.lambda_message.arn

  environment {
    variables = {
      CORS = var.cors
    }
  }
}
