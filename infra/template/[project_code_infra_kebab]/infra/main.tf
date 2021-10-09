terraform {
  backend "s3" {
    bucket = "gannochenko-<%- project_code %>-terraform-states"
    key    = "<%- project_code %>"
    region = "eu-central-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    godaddy = {
      source  = "n3integration/godaddy"
      version = "~> 1.8.7"
    }
  }
}
