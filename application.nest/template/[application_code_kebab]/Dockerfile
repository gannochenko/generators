FROM node:14
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

WORKDIR /app

RUN yarn global add @nestjs/cli
COPY package.json .
RUN yarn

COPY . .

ENV NODE_ENV=production
RUN yarn build

CMD [ "yarn", "start:prod" ]
