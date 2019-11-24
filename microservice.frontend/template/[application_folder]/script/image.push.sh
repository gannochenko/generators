#!/usr/bin/env bash

VENDOR="<%- vendor_name %>"
APPLICATION_NAME="<%- application_code_global %>"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

docker build --no-cache -t ${TAG} -f infra/production.dockerfile .;
docker push ${TAG}
# docker rmi ${TAG}
