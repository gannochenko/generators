#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ENV="${DIR}"/../.env
export AWS_PAGER=""
AWS=aws
# AWS="aws --endpoint-url http://localhost:4566 --profile legacy"

if [ -f "${ENV}" ]
then
  export $(cat "${ENV}" | xargs)
fi

# ${AWS} s3 sync s3://prussiascans-object-photos-backup s3://prussiascans-object-photos
# ${AWS} s3 rb --force s3://prussiascans-object-photos

# ${AWS} dynamodb create-backup --table-name prussiascan.api_ObjectCollection --backup-name ObjectCollectionBackup

# ${AWS} dynamodb restore-table-from-backup --target-table-name ObjectCollectionBackuppp --backup-arn arn:aws:dynamodb:eu-central-1:195905650458:table/prussiascan.api_ObjectCollection/backup/01639084579206-424d0b4b

# ${AWS} dynamodb delete-table --table-name prussiascan.api_ObjectCollection

#${AWS} dynamodb \
#    create-table \
#    --table-name "ObjectCollectionBackuppp" \
#    --attribute-definitions \
#        AttributeName=id,AttributeType=S \
#    --key-schema \
#        AttributeName=id,KeyType=HASH \
#    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

# ${AWS} dynamodb scan --table-name prussiascan.api_ObjectCollection --select "COUNT"
