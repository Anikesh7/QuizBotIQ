resource "aws_instance" "server" {
  ami           = "ami-0ad21ae1d0696ad58"
  instance_type = "t2.medium"
  key_name = "demokey"

  root_block_device {
    volume_size = 12              
    volume_type = "gp3"  
  }

  tags = {
    Name = "Server"
  }
}

