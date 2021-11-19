# VPC Link
resource "aws_api_gateway_vpc_link" "vpc_link_kleeen_api" {
  name = "${var.environment}_vpc_link_kleeen_api"
  target_arns = [
    aws_lb.nlb.arn]
  depends_on = [
    aws_lb.nlb]
}

# API Gateway, Private Integration with VPC Link
# and deployment of a single resource that will take ANY
# HTTP method and proxy the request to the NLB
resource "aws_api_gateway_rest_api" "kpinetwork_kleeen_api" {
  name = "${var.environment}_kpinetwork_kleeen_api"
}
resource "aws_api_gateway_resource" "kpinetwork_kleeen_resource" {
  rest_api_id = aws_api_gateway_rest_api.kpinetwork_kleeen_api.id
  parent_id = aws_api_gateway_rest_api.kpinetwork_kleeen_api.root_resource_id
  path_part = "{proxy+}"
}
resource "aws_api_gateway_method" "main" {
  rest_api_id = aws_api_gateway_rest_api.kpinetwork_kleeen_api.id
  resource_id = aws_api_gateway_resource.kpinetwork_kleeen_resource.id
  http_method = "ANY"
  authorization = "NONE"
  request_parameters = {
    "method.request.path.proxy" = true
  }
}
resource "aws_api_gateway_integration" "kpinetwork_kleeen_integration" {
  rest_api_id = aws_api_gateway_rest_api.kpinetwork_kleeen_api.id
  resource_id = aws_api_gateway_resource.kpinetwork_kleeen_resource.id
  http_method = aws_api_gateway_method.main.http_method
  request_parameters = {
    "integration.request.path.proxy" = "method.request.path.proxy"
  }
  type = "HTTP_PROXY"
  uri = "http://${aws_lb.nlb.dns_name}:${var.app_port}/{proxy}"
  integration_http_method = "ANY"
  connection_type = "VPC_LINK"
  connection_id = aws_api_gateway_vpc_link.vpc_link_kleeen_api.id
  depends_on = [
    aws_lb.nlb]
}

