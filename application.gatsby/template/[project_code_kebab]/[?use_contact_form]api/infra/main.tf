terraform {
  backend "s3" {
    bucket = "<%- project_code %>-tf-states"
    key    = "<%- project_code %>"
    region = "eu-central-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
