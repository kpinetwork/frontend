# ----------------------------------------------------------------------------------------------------------------------
# S3 IAM POLICY
# Provides an IAM role.
# https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
# ----------------------------------------------------------------------------------------------------------------------

resource "aws_s3_bucket_policy" "S3" {
  bucket = var.bucket_information.id
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
         "Resource": "arn:aws:s3:::${var.bucket_information.name}/*"
    }, {
        "Sid": "",
        "Effect": "Allow",
        "Principal": {
            "AWS": "arn:aws:iam::${var.aws_account_id}:user/${var.aws_terraform_user_provider}"
        },
        "Action": "s3:*",
        "Resource": [
            "arn:aws:s3:::${var.bucket_information.name}",
            "arn:aws:s3:::${var.bucket_information.name}/*"
        ]
    }]
}
EOF
}
