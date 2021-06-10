#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ZIP=latest.zip
S3_BUCKET=gannochenko-lambda-code
S3_KEY="${1}"/"${ZIP}"
ENV="${DIR}"/../.env

if [ -f "${ENV}" ]
then
  export $(cat "${ENV}" | xargs)
fi

# build
yarn || exit
yarn webpack --config webpack.config.js --mode production --entry ./src/lambdas/"${1}"/main.js -o ./build/lambdas/"${1}"/ || exit
cd ./build/lambdas/"${1}"
zip ./"${ZIP}" main.js

# deploy
aws s3 cp ./"${ZIP}" s3://"${S3_BUCKET}"/"${S3_KEY}"
#aws lambda update-function-code --function-name my-function --s3-bucket "${S3_BUCKET}" --s3-key "${S3_KEY}"
