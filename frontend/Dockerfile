FROM node:14 as build-stage

WORKDIR /frontend

COPY package.json .

RUN npm install 

COPY . .

ENV CLIENT_APIS_URI=$CLIENT_APIS_URI

RUN npm run build 

FROM nginx:1.17.0-alpine

COPY --from=build-stage /frontend/dist /usr/share/nginx/html

EXPOSE $REACT_DOCKER_PORT 

CMD nginx -g "daemon off;"
