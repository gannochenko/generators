#!/usr/bin/env bash

VENDOR="<%- dockerhub_account_name %>"
APPLICATION_NAME="<%- application_code_global %>"

VERSION="${1:-latest}"
TAG=${VENDOR}/${APPLICATION_NAME}:${VERSION}

docker run -it -p <%- port %>:<%- port %> ${TAG}
