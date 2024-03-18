FROM node:18-alpine

WORKDIR /usr/src/api

COPY package*.json /usr/src/api

RUN yarn install

COPY . /usr/src/api

EXPOSE 3001

CMD [ "yarn", "dev" ]