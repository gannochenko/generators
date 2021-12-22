#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
#export TF_LOG=DEBUG

if [ -f .env ]
then
  export $(cat .env | xargs)
fi

cd "${DIR}/../infra" || exit
terraform destroy
