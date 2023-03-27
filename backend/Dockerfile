FROM node:14 as build-stage

WORKDIR /backend

COPY package.json .

RUN npm install 

COPY . . 

ENV CLIENT_ORIGIN=$CLIENT_ORIGIN

EXPOSE $NODE_DOCKER_PORT

CMD npm start

