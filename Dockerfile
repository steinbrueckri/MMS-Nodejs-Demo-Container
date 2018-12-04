## Specifies the base image we're extending
FROM node:9

## Create base directory
RUN mkdir /src

## Specify the "working directory" for the rest of the Dockerfile
WORKDIR /src

## Install packages using NPM 5 (bundled with the node:9 image)
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install --silent

## Copy application to image
COPY ./index.js /src/index.js

## Allows port 3000 to be publicly available
EXPOSE 3000

## The command to run the application
CMD ["node", "."]
