#!/usr/bin/env bash

################################################################################################
## https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html
################################################################################################

# aws configure --profile <%- project_code %>

AWS="aws dynamodb --endpoint-url http://localhost:4566 --profile <%- project_code %>"

################################################################################################
## DynamoDB Tables
################################################################################################

${AWS} list-tables
${AWS} \
    create-table \
    --table-name SomeTable \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
