// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table

resource "aws_dynamodb_table" "<%- dynamodb_table_name_tf %>" {
  name = "<%- dynamodb_table_global_name %>"
  billing_mode = "PROVISIONED"
  read_capacity  = 4
  write_capacity = 4
  hash_key = "Id"
  range_key = "Title"

  attribute {
    name = "Id"
    type = "S"
  }

  attribute {
    name = "Title"
    type = "S"
  }

//  attribute {
//    name = "Score"
//    type = "N"
//  }

  ttl {
    attribute_name = "TimeToExist"
    enabled = false
  }

//  global_secondary_index {
//    name = "TitleIndex"
//    hash_key = "Title"
//    range_key = "Score"
//    write_capacity = 10
//    read_capacity = 10
//    projection_type = "INCLUDE"
//    non_key_attributes = ["Id"]
//  }

  tags = {
    Name = "dynamodb-table-<%- dynamodb_table_name_tf %>"
    Environment = "production"
  }
}
