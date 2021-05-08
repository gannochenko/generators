#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

yarn || exit
yarn build || exit
cd build || exit
zip ../lambda.zip main.js || exit
