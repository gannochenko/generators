variable "path" {
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

variable "CORS" {
  type = string
  default = "*"
}

variable "STAGE" {
  type = string
}
