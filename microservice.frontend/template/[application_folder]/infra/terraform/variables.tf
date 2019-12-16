variable "namespace" {
  type = string
  default = "default"
}

variable "host" {
  type = string
  default = ""
}

variable "port" {
  type = number
  default = <%- port %>
}

variable "api-url" {
  type = string
  default = ""
}
