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
## https://docs.aws.amazon.com/cli/latest/reference/dynamodb/create-table.html
################################################################################################

echo "Delete tables"

${AWS} dynamodb \
    delete-table \
    --table-name "<%- project_code_kebab %>.<%- application_code_kebab %>_<%- entity_name_camel %>"

${AWS} dynamodb \
    delete-table \
    --table-name "<%- project_code_kebab %>.<%- application_code_kebab %>_Flags"

echo "Re-create tables"

${AWS} dynamodb \
    create-table \
    --table-name "<%- project_code_kebab %>.<%- application_code_kebab %>_<%- entity_name_camel %>" \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
    --key-schema \
        AttributeName=id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

${AWS} dynamodb \
    create-table \
    --table-name "<%- project_code_kebab %>.<%- application_code_kebab %>_Flags" \
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
