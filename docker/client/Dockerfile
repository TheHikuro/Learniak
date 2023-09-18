FROM node:latest as base
ARG SERVICE_NAME
WORKDIR /usr/src/${SERVICE_NAME}
COPY package*.json ./
RUN npm install -g bun

FROM base as dev
ENV NODE_ENV=development
RUN bun install
COPY . .
CMD ["bun", "run", "dev"]

# FROM base as prod
# ENV NODE_ENV=production
# RUN bun install --only=production
# COPY . .
# CMD ["bun", "run", "start:prod"]