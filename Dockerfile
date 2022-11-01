FROM node:latest

USER root

WORKDIR /usr/src/app
COPY . /usr/src/app


RUN npm i

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]







