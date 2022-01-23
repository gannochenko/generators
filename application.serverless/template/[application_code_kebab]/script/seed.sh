#!/usr/bin/env bash

################################################################################################
## https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html
################################################################################################

# aws configure --profile legacy

export AWS_PAGER=""
AWS="aws --endpoint-url http://localhost:4566 --profile legacy"

read -p "Running this script will wipe out clean all your local data. Proceed? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

<% if (use_api) { %>

################################################################################################
## DynamoDB
################################################################################################

echo "Delete tables"

${AWS} dynamodb \
    delete-table \
    --table-name "<%- application_code_kebab %>.api_<%- entity_name_camel %>Collection"

${AWS} dynamodb \
    delete-table \
    --table-name "<%- application_code_kebab %>.api_Flags"

echo "Re-create tables"

${AWS} dynamodb \
    create-table \
    --table-name "<%- application_code_kebab %>.api_<%- entity_name_camel %>Collection" \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
    --key-schema \
        AttributeName=id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

${AWS} dynamodb \
    create-table \
    --table-name "prussiascan.api_Flags" \
    --attribute-definitions \
        AttributeName=code,AttributeType=S \
    --key-schema \
        AttributeName=code,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=2,WriteCapacityUnits=2

################################################################################################
## S3
################################################################################################

#${AWS} s3 rb s3://somebasket-photos --force
#
#${AWS} s3 mb s3://somebasket-photos
#${AWS} s3api put-bucket-acl --bucket somebasket-photos --acl public-read

fi

<% } %>
