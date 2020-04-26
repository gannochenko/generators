#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

REBUILD=""
if [[ $1 = "-r" ]]; then
  REBUILD="--build"
fi

docker stop $(docker ps -aq) > /dev/null;

if [[ $1 = "-d" ]] || [[ $2 = "-d" ]]; then
    docker-compose -f ${DIR}/../infra/development.infra.yml -f ${DIR}/../infra/development.yml up ${REBUILD};
else
    # todo: replace with some adequate concurrency manager
    docker-compose -f ${DIR}/../infra/development.infra.yml up &
    sleep 5; ${DIR}/applications.launch.js;
fi
