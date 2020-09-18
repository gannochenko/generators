#!/usr/bin/env bash

BIN="cli-test"

#DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIR=$(pwd)

echo ${PWD}

yarn build:cjs
cd $(yarn global bin)
ln -s ${DIR}/build.cjs/index.js ./${BIN}

echo "Run 'yarn build:watch' to keep your global installation up-to-date with the source code."
