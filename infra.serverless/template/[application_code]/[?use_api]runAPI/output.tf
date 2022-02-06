output "object_photos_s3_bucket_url" {
  value = "https://${aws_s3_bucket.<%- application_code_tf %>_<%- entity_name_tf %>-upload.bucket}.s3.${aws_s3_bucket.<%- application_code_tf %>_<%- entity_name_tf %>-upload.region}.amazonaws.com/"
}

output "options_table_name" {
  value = aws_dynamodb_table.<%- application_code_tf %>_options.name
}
