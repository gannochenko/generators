variable "api_gateway_id" {
  type = string
}

variable "api_gateway_root_resouce_id" {
  type = string
}

variable "api_gateway_execution_arn" {
  type = string
}

variable "cors" {
  type = string
  default = "*"
}

variable "stage_name" {
  type = string
}
