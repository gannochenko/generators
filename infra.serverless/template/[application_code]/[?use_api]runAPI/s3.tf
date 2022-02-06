resource "aws_s3_bucket" "<%- application_code_tf %>_<%- entity_name_tf %>-upload" {
  bucket = "<%- application_code_tf %>_<%- entity_name_tf %>-upload"
  acl = "public-read"

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "HEAD"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}
