#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$DIR"/.. || exit

yarn;

# add other apps here
# example:
# cd apps/blog && yarn && cd ../..
