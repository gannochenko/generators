FROM node:14
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

WORKDIR /app

ENV NODE_ENV=production

COPY . .
RUN yarn
RUN build

CMD [ "yarn", "start" ]
