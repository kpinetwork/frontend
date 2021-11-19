resource "aws_cloudwatch_log_group" "task_kleeen_ecs" {
  name              = "${var.prefix_ecs_cloudwatch_log_group}${var.environment}_task_kleeen_ecs"
  retention_in_days = 14
}
