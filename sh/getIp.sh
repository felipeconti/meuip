#!/bin/bash

IP=$(wget http://ipinfo.io/ip -qO -)

DATA="{\"server\":\"$1\",\"ip\":\"$IP\"}" # Argument 1

curl -H "Content-Type: application/json" --data $DATA "$2" > /dev/null 2>&1 # Argument 2