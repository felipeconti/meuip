#!/bin/bash

IP=$(wget http://ipinfo.io/ip -qO -)

curl --data "ip=$IP" "$1" > /dev/null 2>&1 # Argument 1