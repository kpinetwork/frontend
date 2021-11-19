output "lb_target_group_arn" {
  value =  aws_lb_target_group.nlb_tg.arn
}

output "api_gateway_rest_api_id" {
  value = aws_api_gateway_rest_api.kpinetwork_kleeen_api.id
}

output "aws_api_gateway_integration" {
  value = aws_api_gateway_integration.kpinetwork_kleeen_integration
}
