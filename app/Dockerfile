FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN yarn install 

COPY . /usr/src/app/

EXPOSE 5173

CMD [ "yarn", "dev", "--debug" ]
