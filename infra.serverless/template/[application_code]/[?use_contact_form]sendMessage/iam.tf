resource "aws_iam_role" "lambda_message" {
  name = "lambda_message"

  assume_role_policy = "${file("${path.module}/files/lambda_message.role.json")}"
}

# See also the following AWS managed policy: AWSLambdaBasicExecutionRole
resource "aws_iam_policy" "lambda_message" {
  name = "lambda_message"
  path = "/"
  description = "IAM policy for sendMessage lambda"

  policy = "${file("${path.module}/files/lambda_message.policy.json")}"
}

resource "aws_iam_role_policy_attachment" "lambda_message" {
  role = aws_iam_role.lambda_message.name
  policy_arn = aws_iam_policy.lambda_message.arn
}
