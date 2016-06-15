#!/bin/bash

IP=$(wget http://ipinfo.io/ip -qO -)
echo $IP

curl --data "ip=$IP" "$1" # Argument 1