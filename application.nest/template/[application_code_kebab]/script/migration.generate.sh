#!/usr/bin/env bash

export TYPEORM_URL="postgres://root:123@localhost:5432/<%- application_code %>"
export TYPEORM_ENTITIES="src/entities/*.ts"
export TYPEORM_MIGRATIONS="src/migrations/*-*.ts"

yarn typeorm migration:generate -n $1 -d migration
