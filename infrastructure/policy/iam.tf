# ----------------------------------------------------------------------------------------------------------------------
# S3 IAM POLICY
# Provides an IAM role.
# https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
# ----------------------------------------------------------------------------------------------------------------------

//resource "aws_s3_bucket_policy" "S3_WWW" {
//  bucket = var.www_bucket_information.id
//  policy = <<EOF
//{
//  "Version": "2008-10-17",
//    "Statement": [
//    {
//        "Sid": "PublicReadForGetBucketObjects",
//        "Effect": "Allow",
//        "Principal": {
//            "AWS": "*"
//         },
//         "Action": "s3:GetObject",
//         "Resource": "arn:aws:s3:::${var.www_bucket_information.name}/*"
//    }, {
//        "Sid": "",
//        "Effect": "Allow",
//        "Principal": {
//            "AWS": "arn:aws:iam::${var.aws_account_id}:user/${var.aws_terraform_user_provider}"
//        },
//        "Action": "s3:*",
//        "Resource": [
//            "arn:aws:s3:::${var.www_bucket_information.name}",
//            "arn:aws:s3:::${var.www_bucket_information.name}/*"
//        ]
//    }]
//}
//EOF
//}

data "aws_iam_policy_document" "www_bucket" {
  statement {
    actions = ["s3:GetObject"]
    principals {
      type        = "AWS"
      identifiers = [
        var.cloudfront_distribution_oai_iam_arn
      ]
    }
    resources = ["${var.www_bucket_information.arn}/*"]
  }
  statement {
    actions   = ["s3:ListBucket"]
    resources = [var.www_bucket_information.arn]

    principals {
      type        = "AWS"
      identifiers = [var.cloudfront_distribution_oai_iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "web_distribution" {
  bucket = var.www_bucket_information.id
  policy = data.aws_iam_policy_document.www_bucket.json
}



resource "aws_s3_bucket_public_access_block" "bucket_restriction" {
  bucket = var.www_bucket_information.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
  depends_on = [
    aws_s3_bucket_policy.web_distribution
  ]
}