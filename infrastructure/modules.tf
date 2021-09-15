module "buckets" {
  source = "./buckets/"
  aws_terraform_user_provider = var.aws_terraform_user_provider
  aws_account_id = var.aws_account_id
}

module "cdn" {
  source = "./cdn/"
  bucket_information = module.buckets.bucket_information
}