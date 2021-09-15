output "bucket_information" {
  value = {
    bucket_regional_domain_name : aws_s3_bucket.kpinetwork_frontend_project.bucket_regional_domain_name
    bucket : aws_s3_bucket.kpinetwork_frontend_project.bucket
    name : var.bucket_name
  }
}