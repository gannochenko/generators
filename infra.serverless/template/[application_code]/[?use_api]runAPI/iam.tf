resource "aws_iam_role" "<%- application_code_tf %>_run-api" {
  name = "<%- application_code_tf %>_run-api"

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

resource "aws_iam_policy" "<%- application_code_tf %>_run-api" {
  name = "<%- application_code_tf %>_run-api"
  path = "/"
  description = "IAM policy for runAPI lambda"

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
        "dynamodb:Query",
        "dynamodb:Scan",
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:UpdateItem"
      ],
      "Resource": "arn:aws:dynamodb:*:*:*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:HeadObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::<%- application_code_tf %>_object-photos/*",
      "Effect": "Allow"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "<%- application_code_tf %>_run-api_logging" {
  role = aws_iam_role.<%- application_code_tf %>_run-api.name
  policy_arn = aws_iam_policy.<%- application_code_tf %>_run-api.arn
}

resource "aws_s3_bucket_policy" "s3_bucket_<%- application_code_tf %>_object-photos" {
  bucket = aws_s3_bucket.<%- application_code_tf %>_<%- entity_name_tf %>-upload.id
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": [
             "s3:GetObject"
          ],
          "Resource": [
             "arn:aws:s3:::${aws_s3_bucket.<%- application_code_tf %>_<%- entity_name_tf %>-upload.id}/*"
          ]
      }
    ]
}
POLICY
}
