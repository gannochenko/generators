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
