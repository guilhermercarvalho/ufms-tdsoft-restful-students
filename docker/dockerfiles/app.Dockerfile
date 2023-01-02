# first stage: build
FROM node:16.18.0-bullseye-slim as builder

RUN npm install npm@9.2.0 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

###

# final stage: start
FROM node:16.18.0-bullseye-slim

RUN npm install npm@9.2.0 pm2 -g

ENV NODE_ENV production
ENV PORT 8080

ENV SQLITE_DATABASE student.sqlite

ENV REDIS_HOST cache-redis
ENV REDIS_PORT 6379

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
COPY /processes.prod.json ./

RUN npm run typeorm migration:run -- -d ./dist/infra/db/orm/sqlite/data-source.js

EXPOSE ${PORT}
CMD ["pm2-runtime", "processes.prod.json", "--no-daemon"]
