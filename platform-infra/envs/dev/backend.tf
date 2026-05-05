terraform {
  backend "s3" {
    bucket = "aws-gitops-platform-tfstate-535"
    key    = "envs/dev/terraform.tfstate"
    region = "us-east-1"
  }
}