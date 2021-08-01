#!/usr/bin/env bash

VENDOR="<%- dockerhub_account_name %>"
APPLICATION_NAME="<%- project_code_global %>"

VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Pushing ${TAG} image;

docker push ${TAG}
