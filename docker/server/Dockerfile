FROM node:latest

WORKDIR /

COPY package*.json ./
RUN npm install -g bun

COPY . .

ENV NODE_ENV dev
CMD ["bun", "start"]

EXPOSE 3000