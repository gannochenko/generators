// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table

resource "aws_dynamodb_table" "<%- application_code_tf %>_<%- entity_name_tf %>" {
  name = "<%- application_code_tf %>_<%- entity_name_camel %>"
  billing_mode = "PROVISIONED"
  read_capacity = 4
  write_capacity = 4
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

//  ttl {
//    attribute_name = "TimeToExist"
//    enabled = false
//  }

//  global_secondary_index {
//    name = "TitleIndex"
//    hash_key = "Title"
//    range_key = "Score"
//    write_capacity = 10
//    read_capacity = 10
//    projection_type = "INCLUDE"
//    non_key_attributes = ["Id"]
//  }
}

resource "aws_dynamodb_table" "<%- application_code_tf %>_options" {
  name = "<%- application_code_tf %>_Options"
  billing_mode = "PROVISIONED"
  read_capacity = 2
  write_capacity = 2
  hash_key = "code"

  attribute {
    name = "code"
    type = "S"
  }

  //  ttl {
  //    attribute_name = "TimeToExist"
  //    enabled = false
  //  }

  //  global_secondary_index {
  //    name = "TitleIndex"
  //    hash_key = "Title"
  //    range_key = "Score"
  //    write_capacity = 10
  //    read_capacity = 10
  //    projection_type = "INCLUDE"
  //    non_key_attributes = ["Id"]
  //  }
}
