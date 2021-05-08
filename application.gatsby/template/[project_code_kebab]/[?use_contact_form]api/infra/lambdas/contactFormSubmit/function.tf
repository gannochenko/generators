resource "aws_lambda_function" "contact_form_submit" {
  function_name = local.lambda_function_name

  filename = local.file_path
  source_code_hash = filebase64sha256(local.file_path)
//  # The bucket name as created earlier with "aws s3api create-bucket"
//  s3_bucket = "<%- project_code %>_lambdas"
//  s3_key    = "contact_form_submit/v1.0.0/lambda.zip"

  handler = "main.handler"
  runtime = "nodejs14.x"

  role = aws_iam_role.lambda.arn

  depends_on = [
    aws_iam_role_policy_attachment.contact_form_submit_logging,
    aws_cloudwatch_log_group.contact_form_submit,
  ]
}
