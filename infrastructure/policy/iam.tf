# ----------------------------------------------------------------------------------------------------------------------
# S3 IAM POLICY
# Provides an IAM role.
# https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
# ----------------------------------------------------------------------------------------------------------------------

data "aws_iam_policy_document" "distribution_bucket" {
  statement {
    actions = [
      "s3:GetObject"]
    principals {
      type = "AWS"
      identifiers = [
        var.cloudfront_distribution_oai_iam_arn
      ]
    }
    resources = [
      "${var.bucket_information.arn}/*"]
  }
  statement {
    actions = [
      "s3:ListBucket"]
    resources = [
      var.bucket_information.arn]

    principals {
      type = "AWS"
      identifiers = [
        var.cloudfront_distribution_oai_iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "web_distribution" {
  bucket = var.bucket_information.id
  policy = data.aws_iam_policy_document.distribution_bucket.json
}


resource "aws_s3_bucket_public_access_block" "bucket_restriction" {
  bucket = var.bucket_information.id

  block_public_acls = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
  depends_on = [
    aws_s3_bucket_policy.web_distribution
  ]
}

# ----------------------------------------------------------------------------------------------------------------------
# ECS IAM POLICY
# ----------------------------------------------------------------------------------------------------------------------

resource "aws_iam_role" "ecs_app_role" {
  name = "${var.environment}_ecs_app_role"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

// This policy adds logging + ecr permissions
resource "aws_iam_role_policy_attachment" "ecs_app_role_policy_attachment" {
  role = aws_iam_role.ecs_app_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}
