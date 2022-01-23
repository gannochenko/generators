#!/usr/bin/env bash

################################################################################################
## https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html
################################################################################################

# aws configure --profile legacy

export AWS_PAGER=""
AWS="aws --endpoint-url http://localhost:4566 --profile legacy"

echo "Tables we have now:"

${AWS} dynamodb list-tables

echo "Buckets we have now:"

${AWS} s3api list-buckets --query "Buckets[].Name"
