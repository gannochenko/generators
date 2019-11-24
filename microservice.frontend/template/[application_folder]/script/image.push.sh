#!/usr/bin/env bash

VENDOR="aw"
APPLICATION_NAME="front"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"

docker build --no-cache -t ${VENDOR}/${APPLICATION_NAME}:${VERSION} -f infra/production.dockerfile .;
docker push ${VENDOR}/${APPLICATION_NAME}:${VERSION}
# docker rmi ${VENDOR}/${APPLICATION_NAME}:${VERSION}
