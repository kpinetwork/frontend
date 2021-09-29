module "buckets" {
  source = "./buckets/"
  domain = var.root_domain_name
  www_domain = var.www_domain_name
}

module "cdn" {
  source = "./cdn/"
  domain = var.root_domain_name
  www_domain = var.www_domain_name
  certificate_arn = module.cert.certificate_validation_arn
  www_bucket_information = module.buckets.bucket_information
}

module "policy" {
  source = "./policy/"
  www_bucket_information = module.buckets.bucket_information
  aws_terraform_user_provider = var.aws_terraform_user_provider
  aws_account_id = var.aws_account_id
  cloudfront_distribution_oai_iam_arn = module.cdn.cloudfront_distribution_oai
}

module "dns" {
  source = "./dns"
  aws_cloudfront_distribution = module.cdn.cloudfront_distribution
  domain = var.root_domain_name
  www_domain = var.www_domain_name
  domain_certificates = module.cert.domain_certificate
  cert_sans = local.cert_sans
  hosted_zone_id = aws_route53_zone.kpinetwork.zone_id
}

module "cert" {
  source = "./certificates"
  cert_validation_fqdn = module.dns.cert_validation_fqdn
  domain = var.root_domain_name
  www_domain = var.www_domain_name
  aws_access_key_id = var.aws_access_key_id
  aws_secret_access_key = var.aws_secret_access_key
  cert_sans = local.cert_sans
}