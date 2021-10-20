# This is to optionally manage the CloudWatch Log Group for the Lambda Function.
# If skipping this resource configuration, also add "logs:CreateLogGroup" to the IAM policy below.
resource "aws_cloudwatch_log_group" "<%- application_code_tf %>_<%- function_name %>" {
  name = "/aws/lambda/${aws_lambda_function.<%- function_name %>.function_name}"
  retention_in_days = 14
}
