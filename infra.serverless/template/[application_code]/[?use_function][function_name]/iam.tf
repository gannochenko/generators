resource "aws_iam_role" "<%- application_code_tf %>_<%- function_name_tf %>" {
  name = "<%- application_code_tf %>_<%- function_name_tf %>"

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

resource "aws_iam_policy" "lambda_<%- function_name_tf %>" {
  name = "<%- application_code_tf %>_<%- function_name_tf %>"
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

resource "aws_iam_role_policy_attachment" "<%- application_code_tf %>_<%- function_name_tf %>" {
  role = aws_iam_role.<%- application_code_tf %>_<%- function_name_tf %>.name
  policy_arn = aws_iam_policy.<%- application_code_tf %>_<%- function_name_tf %>.arn
}
