#!/usr/bin/env bash

VENDOR="<%- dockerhub_account_name %>"
APPLICATION_NAME="<%- project_code_global %>"

VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Building ${TAG} image;

if ! [ $? -eq 0 ]
then
    exit 1;
fi
docker build -t ${TAG} .;
