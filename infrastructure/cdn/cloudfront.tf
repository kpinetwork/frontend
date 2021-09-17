# ----------------------------------------------------------------------------------------------------------------------
# CLOUDFRONT DISTRIBUTION
# @param origin One or more origins for this distribution
# @param default_root_object By default, show index.html file
# @param enabled A flag that specifies whether Origin Shield is enabled.
# @param custom_error_response If there is a 404, return index.html with a HTTP 200 Response
# @param default_cache_behavior The default cache behavior for this distribution
# @param price_class Distributes content to US and Europe
# @param restrictions Restricts who is able to access this content
# @param viewer_certificate SSL certificate for the service.
# ----------------------------------------------------------------------------------------------------------------------

resource "aws_cloudfront_distribution" "prod_distribution" {
  origin {
    domain_name = "${var.bucket_information.bucket_regional_domain_name}"
    origin_id = "S3-${var.bucket_information.bucket}"
    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "match-viewer"
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }
  default_root_object = "index.html"
  enabled = true
  custom_error_response {
    error_caching_min_ttl = 3000
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }
  default_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "S3-${var.bucket_information.bucket}"
    forwarded_values {
      query_string = true
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "allow-all"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
  }
  price_class = "PriceClass_100"
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    cloudfront_default_certificate = true
  }
}