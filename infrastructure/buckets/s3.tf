# ----------------------------------------------------------------------------------------------------------------------
# S3 BUCKET TO STORE WEBSITE FILES
# @param bucket Bucket name
# @param acl The canned ACL to apply
# @param cors_rule A rule of Cross-Origin Resource Sharing
# ----------------------------------------------------------------------------------------------------------------------
resource "aws_s3_bucket" "kpinetwork_frontend" {
  bucket = var.bucket_name
  acl = "private"
  cors_rule {
    allowed_headers = [
      "*"]
    allowed_methods = [
      "PUT",
      "POST",
      "GET"
    ]
    allowed_origins = [
      "*"]
    max_age_seconds = 3000
  }
}