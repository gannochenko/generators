#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ -f .env ]
then
  export $(cat .env | xargs)
fi

cd "${DIR}/../infra" || exit
aws s3api create-bucket --bucket=gannochenko-<%- project_code %>-terraform-states --region=eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
terraform init -reconfigure -upgrade
