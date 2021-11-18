output "roles_arn" {
  value = {
    ecs_app_role = aws_iam_role.ecs_app_role.arn
  }
}
