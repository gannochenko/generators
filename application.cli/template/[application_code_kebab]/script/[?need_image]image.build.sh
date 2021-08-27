#!/usr/bin/env bash

VENDOR="<%- dockerhub_account_name %>"
APPLICATION_NAME="<%- application_code_kebab %>"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Building ${TAG} image;

if ! [ $? -eq 0 ]
then
    exit 1;
fi
docker build -t ${TAG} .;
