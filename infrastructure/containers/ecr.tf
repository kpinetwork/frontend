resource "aws_ecr_repository" "ecr_repo" {
  name = "${var.environment}_kpinetwork_kleeen_api_repo"
}
