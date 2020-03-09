#!/usr/bin/env bash

<% if (!is_cli) { %>
yarn run install-peers;
if ! [ $? -eq 0 ]
then
    exit 1;
fi
<% } %>

yarn run lint;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run test;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run build;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn run build:cjs;
if ! [ $? -eq 0 ]
then
    exit 1;
fi

yarn publish;
