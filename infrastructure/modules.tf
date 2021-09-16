module "buckets" {
  source = "./buckets/"
}

module "cdn" {
  source = "./cdn/"
  bucket_information = module.buckets.bucket_information
}

module "policy" {
  source = "./policy/"
  bucket_information = module.buckets.bucket_information
  aws_terraform_user_provider = var.aws_terraform_user_provider
  aws_account_id = var.aws_account_id
}