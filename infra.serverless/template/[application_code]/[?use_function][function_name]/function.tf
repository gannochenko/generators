//resource "aws_lambda_layer_version" "some-massive-library" {
//  filename   = "some-massive-library.zip"
//  layer_name = "<%- function_name %>_some-massive-library"
//
//  compatible_runtimes = ["nodejs14.x"]
//}

resource "aws_lambda_function" "<%- function_name %>" {
  function_name = local.lambda_function_name

  filename = "lambda-function-dummy.zip"
  source_code_hash = filebase64sha256("lambda-function-dummy.zip")

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = var.aws_iam_role_lambda_arn

//  layers = [aws_lambda_layer_version.some-massive-library.arn]

  environment {
    variables = {
      CORS = var.cors
    }
  }
}
