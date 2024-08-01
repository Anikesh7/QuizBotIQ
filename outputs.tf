output "server_ip" {
  value = aws_instance.server.public_ip
}

output "frontend_ip" {
  value = aws_instance.frontend.public_ip
}