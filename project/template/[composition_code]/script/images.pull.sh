#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

docker-compose -f ${DIR}/../infra/development.infra.yml pull --ignore-pull-failures;
