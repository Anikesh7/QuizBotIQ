resource "aws_instance" "frontend" {
  ami           = "ami-0ad21ae1d0696ad58"
  instance_type = "t2.medium"
  key_name = "demokey"

  tags = {
    Name = "Server"
  }
}

