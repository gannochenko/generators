#!/usr/bin/env bash

S3_BUCKET=gannochenko-<%- project_code_kebab %>-<%- application_code_kebab %>-lambda-src
FN_NAME=${1}
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ZIP=latest.zip
S3_KEY="${FN_NAME}"/"${ZIP}"
S3_REGION=eu-central-1
ENV="${DIR}"/../.env

if [ -f "${ENV}" ]
then
  export $(cat "${ENV}" | xargs)
fi

aws s3api create-bucket --bucket="${S3_BUCKET}" --region="${S3_REGION}" --create-bucket-configuration LocationConstraint="${S3_REGION}"

# build
yarn || exit
yarn webpack --config webpack.config.js --mode production --entry ./src/lambdas/"${FN_NAME}"/main.js -o ./build/lambdas/"${FN_NAME}"/ || exit
cd ./build/lambdas/"${FN_NAME}"
zip ./"${ZIP}" main.js

# deploy
aws s3 cp ./"${ZIP}" s3://"${S3_BUCKET}"/"${S3_KEY}"
aws lambda update-function-code --function-name "${FN_NAME}" --s3-bucket "${S3_BUCKET}" --s3-key "${S3_KEY}" --region="${S3_REGION}"
