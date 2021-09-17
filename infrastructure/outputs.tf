output "prod_distribution_id" {
  value = module.cdn.prod_distribution_id
}

output "region" {
  value = var.region
}

output "bucket_name" {
  value = module.buckets.bucket_information.name
}