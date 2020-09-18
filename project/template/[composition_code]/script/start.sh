#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

REBUILD=""
if [[ $1 = "-r" ]]; then
  REBUILD="--build"
fi

if [[ $1 = "-d" ]] || [[ $2 = "-d" ]]; then
    docker stop $(docker ps -aq) > /dev/null;
    docker-compose -f ${DIR}/../infra/development.infra.yml -f ${DIR}/../infra/development.yml up ${REBUILD};
else
    if [[ $1 = "-i" ]] || [[ $2 = "-i" ]]; then
        docker stop $(docker ps -aq) > /dev/null;
        docker-compose -f ${DIR}/../infra/development.infra.yml up
    else
        if [[ $1 = "-p" ]]; then
            ${DIR}/applications.launch.js $2;
        else
            docker stop $(docker ps -aq) > /dev/null;
            # todo: replace with some adequate concurrency manager
            docker-compose -f ${DIR}/../infra/development.infra.yml up &
            sleep 5; ${DIR}/applications.launch.js;
        fi
    fi
fi
