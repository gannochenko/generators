//resource "aws_lambda_layer_version" "some-massive-library" {
//  filename   = "some-massive-library.zip"
//  source_code_hash = filebase64sha256("some-massive-library.zip")
//  layer_name = "<%- function_name %>_some-massive-library"
//
//  compatible_runtimes = ["nodejs14.x"]
//}

resource "aws_lambda_function" "<%- application_code_tf %>_<%- function_name_tf %>" {
  function_name = "<%- application_code_tf %>_<%- function_name %>"

  filename = "lambda-function-dummy.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = aws_iam_role.<%- application_code_tf %>_<%- function_name_tf %>.arn

//  layers = [aws_lambda_layer_version.some-massive-library.arn]

  environment {
    variables = {
      CORS = var.CORS
    }
  }
}
