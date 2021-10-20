resource "aws_iam_role" "lambda_<%- function_name %>" {
  name = "lambda_<%- function_name %>"

  assume_role_policy = "${file("${path.module}/files/lambda_<%- function_name %>.role.json")}"
}

resource "aws_iam_policy" "lambda_<%- function_name %>" {
  name = "lambda_<%- function_name %>"
  path = "/"
  description = "IAM policy for <%- function_name %> lambda"

  policy = "${file("${path.module}/files/lambda_<%- function_name %>.policy.json")}"
}

resource "aws_iam_role_policy_attachment" "lambda_<%- function_name %>" {
  role = aws_iam_role.lambda_<%- function_name %>.name
  policy_arn = aws_iam_policy.lambda_<%- function_name %>.arn
}
