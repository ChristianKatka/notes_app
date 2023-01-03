#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./dynamodb/notes-app-dynamodb-notes-table.yaml"
STACK_NAME="notes-app-dynamodb-notes-table"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
