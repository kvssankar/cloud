terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

variable "subnet_prefix" {
  desdescription = "sasas"
  #default = 
}

# Configure the AWS Provider
provider "aws" {
  region     = "us-east-1"
  access_key = "AKIA2KGDXX2PMTHRSS5J"
  secret_key = "veU+lp9zBIGzBzH3EKBhoEIOQVe8SFX1r6lhKBbE "
}

# Create a VPC
resource "aws_vpc" "example" {
  cidr_block = var.subnet_prefix
}

output "server_public_ip" {
  value = aws_vpc.example.id
}
