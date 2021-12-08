FROM node:10-alpine

RUN apk add -U --no-cache curl bash openssl

WORKDIR /mcn_security

# Add dockerize tool
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./package.json ./

EXPOSE 3000

CMD dockerize -wait tcp://mysql:3306 -timeout 300s -wait-retry-interval 10s npm run start:dev
