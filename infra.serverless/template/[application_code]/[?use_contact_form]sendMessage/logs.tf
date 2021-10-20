# This is to optionally manage the CloudWatch Log Group for the Lambda Function.
# If skipping this resource configuration, also add "logs:CreateLogGroup" to the IAM policy below.
resource "aws_cloudwatch_log_group" "<%- application_code_tf %>_sendMessage" {
  name = "/aws/lambda/${aws_lambda_function.sendMessage.function_name}"
  retention_in_days = 14
}
