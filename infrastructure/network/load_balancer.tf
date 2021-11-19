resource "aws_lb" "nlb" {
  name               = "${var.environment}-nlb-kpinetwork"
  internal           = true
  load_balancer_type = "network"
  subnets            = [var.private_subnet_id]
  enable_deletion_protection = false
  tags = {
    Environment = var.environment
  }
  timeouts {
    create = "20m"
    delete = "20m"
  }
}
resource "aws_lb_target_group" "nlb_tg" {
  depends_on  = [
    aws_lb.nlb
  ]
  name        = "${var.environment}-nlb-syn-kpinetwork"
  port        = var.app_port
  protocol    = "TCP"
  vpc_id      = var.vpc_id
  target_type = "ip"
}
# Redirect all traffic from the NLB to the target group
resource "aws_lb_listener" "nlb_listener" {
  load_balancer_arn = aws_lb.nlb.id
  port              = var.app_port
  protocol    = "TCP"
  default_action {
    target_group_arn = aws_lb_target_group.nlb_tg.id
    type             = "forward"
  }
}
