variable "s3_bucket" {
  type = string
}

variable "api_gateway_id" {
  type = string
}

variable "api_gateway_root_resource_id" {
  type = string
}

variable "api_gateway_execution_arn" {
  type = string
}

variable "aws_iam_role_lambda_arn" {
  type = string
}

variable "path" {
  type = string
}

variable "cors" {
  type = string
  default = "*"
}

variable "stage_name" {
  type = string
}
