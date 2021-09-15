terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

  backend "s3" {
    bucket = "kpinetwork-infrastructure"
    key = "frontend/terraform.tfstate"
    region = "us-west-2"
  }
}