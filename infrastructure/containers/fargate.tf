resource "aws_ecs_task_definition" "kleeen_api_task" {
  family = "${var.environment}_kleeen_api_task"
  requires_compatibilities = [
    "FARGATE"
  ]
  network_mode = "awsvpc"
  memory = local.memory_values[var.environment]
  cpu = local.cpu_values[var.environment]
  execution_role_arn = var.ecs_role_arn

  container_definitions = <<EOT
[
    {
        "name": "${var.environment}_app_container",
        "image": "${aws_ecr_repository.ecr_repo.repository_url}:latest",
        "memory": ${tonumber(local.memory_values[var.environment])},
        "cpu": ${tonumber(local.cpu_values[var.environment])},
        "essential": true,
        "portMappings": [
            {
                "containerPort": ${var.port},
                "hostPort": ${var.port}
            }
        ],
        "logConfiguration": {
          "logDriver": "awslogs",
          "options": {
            "awslogs-group": "${var.cloudwatch_name_task_definition}",
            "awslogs-region": "${var.region}",
            "awslogs-stream-prefix": "ecs"
          }
        },
        "environment": [
          {
            "name": "ENVIRONMENT",
            "value": "${var.environment}"
          },
          {
            "name": "KPINETWORK_API",
            "value": "${local.api_domains[var.environment]}"
          }
        ]
    }
]
EOT
}

resource "aws_ecs_cluster" "kleeen_cluster_app" {
  name = "${var.environment}_kleeen_cluster_app"
}

resource "aws_ecs_service" "kleeen_service" {
  name = "${var.environment}_kleeen_service"

  cluster = aws_ecs_cluster.kleeen_cluster_app.id
  task_definition = aws_ecs_task_definition.kleeen_api_task.arn

  launch_type = "FARGATE"
  desired_count = 1

  network_configuration {
    subnets = [
      var.public_subnet_a_id
    ]
    security_groups = [
      var.security_group_id
    ]
    assign_public_ip = true
  }
  load_balancer {
    target_group_arn = var.lb_target_group_arn
    container_name = "${var.environment}_app_container"
    container_port = var.port
  }
  depends_on = [
    aws_ecs_task_definition.kleeen_api_task,
  ]
}
