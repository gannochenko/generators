FROM node:11
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN yarn
COPY . .
# todo: this is not good, we need to build outside of the container, and then just add files!
RUN yarn run build

EXPOSE <%- port %>
CMD [ "yarn", "start" ]
