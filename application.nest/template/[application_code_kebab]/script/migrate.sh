#!/usr/bin/env bash

if [[ $1 == "local" ]]
then
    export NODE_ENV="development"
    export TYPEORM_URL="postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}"
else
    URL=
    USERNAME=
    PASSWORD=

    URL_PART=$(echo "${URL}" | sed -e "s/^postgres:\/\///")

    export TYPEORM_URL="postgres://${USERNAME}:${PASSWORD}@${URL_PART}"
fi

export TYPEORM_CONNECTION="postgres"
export TYPEORM_ENTITIES="src/entities/*.ts"
export TYPEORM_MIGRATIONS="src/migrations/*-*.ts"

ts-node ./node_modules/typeorm/cli.js migration:run
