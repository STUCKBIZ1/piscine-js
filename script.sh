#!/bin/bash

# Check if parameter is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <exercise-name>"
  exit 1
fi

EXERCISE_NAME="$1"

cd /home/aelhassn/Desktop/public/js/tests || exit 1

node test.mjs /home/aelhassn/Desktop/piscine-js "$EXERCISE_NAME"
