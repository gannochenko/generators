#!/usr/bin/env bash

VENDOR="<%- vendor_name %>"
APPLICATION_NAME="<%- application_code_global %>"
PORT="<%- port %>"

# this script runs a standalone image created with script/image.build.sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

echo Running ${TAG} image;

docker run -d -p ${PORT}:${PORT} ${TAG}
