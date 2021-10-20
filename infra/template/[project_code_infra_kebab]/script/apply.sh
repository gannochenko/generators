#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
#export TF_LOG=DEBUG

if [ -f .envvars ]
then
  export $(cat .envvars | xargs)
fi

cd "${DIR}/../infra" || exit
terraform apply -auto-approve
