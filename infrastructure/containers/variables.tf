variable "environment" {}
variable "ecs_role_arn" {}
variable "public_subnet_a_id" {}
variable "security_group_id" {}
variable "cloudwatch_name_task_definition" {}
variable "region" {}
variable "lb_target_group_arn" {}
variable "port" {
  default = 3000
}
locals {
  cpu_values = {
    "prod" = "512"
    "demo" = "256"
  }
  memory_values = {
    "prod" = "2048"
    "demo" = "1024"
  }
}
