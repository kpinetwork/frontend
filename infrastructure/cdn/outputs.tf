output "cloudfront_distribution" {
  value = {
    id: aws_cloudfront_distribution.distribution.id
    domain_name: aws_cloudfront_distribution.distribution.domain_name
    hosted_zone_id: aws_cloudfront_distribution.distribution.hosted_zone_id
  }
}