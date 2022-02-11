#resource "aws_lambda_layer_version" "sharp" {
#  filename   = "lambda-layer-sharp.zip"
#  source_code_hash = filebase64sha256("lambda-layer-sharp.zip")
#  layer_name = "runAPI_layer"
#
#  compatible_runtimes = ["nodejs14.x"]
#}

resource "aws_lambda_function" "<%- application_code_tf %>_run-api" {
  function_name = "<%- application_code_tf %>_runAPI"

  filename = "lambda-function-dummy.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = aws_iam_role.<%- application_code_tf %>_run-api.arn

#  layers = [aws_lambda_layer_version.sharp.arn]

  timeout = 15

  environment {
    variables = {
      CORS = var.CORS
      <%- entity_name_camel_uc %>_TABLE_NAME = aws_dynamodb_table.<%- application_code_tf %>_<%- entity_name_tf %>.name
      <%- entity_name_camel_uc %>_UPLOAD_BUCKET_NAME = aws_s3_bucket.<%- application_code_tf %>_<%- entity_name_tf %>-upload.bucket
    }
  }
}
