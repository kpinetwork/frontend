output "bucket_information" {
  value = {
    bucket_regional_domain_name : aws_s3_bucket.kpinetwork_frontend.bucket_regional_domain_name
    bucket : aws_s3_bucket.kpinetwork_frontend.bucket
    name : var.bucket_name
    id: aws_s3_bucket.kpinetwork_frontend.id
  }
}