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

  role = aws_iam_role.lambda_<%- application_code_tf %>_run-api.arn

#  layers = [aws_lambda_layer_version.sharp.arn]

  timeout = 15

  environment {
    variables = {
      CORS = var.CORS
      AWS_OBJECT_TABLE_NAME = aws_dynamodb_table.<%- application_code_tf %>-<%- entity_name_tf %>.name
      AWS_OBJECT_PHOTOS_BUCKET_NAME = aws_s3_bucket.<%- application_code_tf %>-<%- entity_name_tf %>-upload.bucket
      CICD_API_KEY = var.CICD_API_KEY
      CONTRIBUTOR_API_KEY = var.CONTRIBUTOR_API_KEY
    }
  }
}
