#!/usr/bin/env bash

VENDOR="aw"
APPLICATION_NAME="front"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Building ${TAG} image;

docker build --no-cache -t ${TAG} -f infra/production.dockerfile .;
