Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY..

RUN mkdir -p /data && npm install

EXPOSE 3000

CMD ["npm", "start"]

