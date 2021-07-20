#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ -f .env ]
then
  export $(cat .env | xargs)
fi

cd "${DIR}/../infra" || exit
terraform refresh
terraform output
