FROM node:13
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

WORKDIR /app

ENV NODE_ENV=production

COPY ./package.json .
COPY ./build/ .
RUN yarn

EXPOSE <%- port %>
CMD [ "yarn", "start" ]
