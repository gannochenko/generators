#!/usr/bin/env bash

VENDOR="<%- dockerhub_account_name %>"
APPLICATION_NAME="<%- application_code_kebab %>"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Pushing ${TAG} image;

docker push ${TAG}
