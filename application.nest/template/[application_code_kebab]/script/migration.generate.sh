#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ENV="${DIR}"/../.env

if [ -f "${ENV}" ]
then
  export $(cat "${ENV}" | xargs)
fi

export TYPEORM_URL="postgres://root:123@localhost:5432/<%- application_code %>"
export TYPEORM_ENTITIES="src/entities/*.ts"
export TYPEORM_MIGRATIONS="src/migrations/*-*.ts"

yarn typeorm migration:generate -d src/migrations -n $1
