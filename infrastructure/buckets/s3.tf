resource "aws_s3_bucket" "kpinetwork_frontend_project" {
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

resource "aws_s3_bucket_policy" "S3" {
  bucket = aws_s3_bucket.kpinetwork_frontend_project.id
  policy = <<EOF
{
  "Version": "2008-10-17",
    "Statement": [
    {
        "Sid": "PublicReadForGetBucketObjects",
        "Effect": "Allow",
        "Principal": {
            "AWS": "*"
         },
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::${var.bucket_name}/*"
    }, {
        "Sid": "",
        "Effect": "Allow",
        "Principal": {
            "AWS": "arn:aws:iam::${var.aws_account_id}:user/${var.aws_terraform_user_provider}"
        },
        "Action": "s3:*",
        "Resource": [
            "arn:aws:s3:::${var.bucket_name}",
            "arn:aws:s3:::${var.bucket_name}/*"
        ]
    }]
}
EOF
}

# ----------------------------------------------------------------------------------------------------------------------
# UPLOAD THE ZIP CODE TO S3
# @param bucket Bucket to upload code
# @param key Object name
# @param source Local directory to get zip code
# @param etag Triggers updates when the value changes
# ----------------------------------------------------------------------------------------------------------------------

//resource "null_resource" "remove_and_upload_to_s3" {
//  depends_on = [
//    aws_s3_bucket.kpinetwork_frontend_project
//  ]
//  provisioner "local-exec" {
//    command = "aws s3 sync ${path.module}/../../build s3://${aws_s3_bucket.kpinetwork_frontend_project.id}"
//  }
//}