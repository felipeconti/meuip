#!/bin/bash

DATA="{\"server\":\"$1\"}" # Argument 1

curl -H "Content-Type: application/json" --data $DATA "$2" > /dev/null 2>&1 # Argument 2