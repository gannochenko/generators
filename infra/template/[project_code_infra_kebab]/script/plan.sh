#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ -f .envvars ]
then
  export $(cat .envvars | xargs)
fi

cd "${DIR}/../infra" || exit
terraform plan
