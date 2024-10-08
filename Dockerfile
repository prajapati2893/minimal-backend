FROM node:20.17.0-bullseye

ARG APP_PORT
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG DATABASE_USERNAME
ARG DATABASE_PASSWORD
ARG DATABASE_NAME
ARG NODE_ENV

ENV APP_PORT=${APP_PORT}
ENV DATABASE_HOST=${DATABASE_HOST}
ENV DATABASE_PORT=${DATABASE_PORT}
ENV DATABASE_USERNAME=${DATABASE_USERNAME}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ENV DATABASE_NAME=${DATABASE_NAME}
ENV NODE_ENV=${NODE_ENV}

WORKDIR /minimal-backend
COPY package*.json ./
RUN npm install

COPY . .