
resource "aws_instance" "server" {
  ami           = "ami-0ad21ae1d0696ad58"
  instance_type = "t2.micro"
  key_name = "demokey"

  tags = {
    Name = "Server"
  }
}

resource "aws_instance" "frontend" {
  ami           = "ami-0ad21ae1d0696ad58"
  instance_type = "t2.micro"
  key_name = "demokey"

  tags = {
    Name = "Frontend"
  }
}

