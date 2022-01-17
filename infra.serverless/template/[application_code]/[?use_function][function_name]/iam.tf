resource "aws_iam_role" "lambda_<%- function_name %>" {
  name = "lambda_<%- function_name %>"

  assume_role_policy = <<ROLE
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
ROLE
}

resource "aws_iam_policy" "lambda_<%- function_name %>" {
  name = "lambda_<%- function_name %>"
  path = "/"
  description = "IAM policy for <%- function_name %> lambda"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dynamodb:PutItem"
      ],
      "Resource": "arn:aws:dynamodb:*:*:*",
      "Effect": "Allow"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "lambda_<%- function_name %>" {
  role = aws_iam_role.lambda_<%- function_name %>.name
  policy_arn = aws_iam_policy.lambda_<%- function_name %>.arn
}
