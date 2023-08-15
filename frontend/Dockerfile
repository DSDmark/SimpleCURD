FROM node:14 as build-stage

WORKDIR /frontend

COPY package.json .

RUN npm install

RUN npm ci 

COPY . .

ARG VITE_APIS_URI

ENV VITE_APIS_URI=$VITE_APIS_URI

RUN npm run build 

FROM nginx:1.17.0-alpine

COPY --from=build-stage /frontend/dist /usr/share/nginx/html

# Copy your custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the entry point script
COPY entrypoint.sh /entrypoint.sh

# Make the entry point script executable
RUN chmod +x /entrypoint.sh

EXPOSE $VITE_DOCKER_PORT

# Set the entry point
ENTRYPOINT ["/entrypoint.sh"]


