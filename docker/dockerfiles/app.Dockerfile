# first stage: build
FROM node:16.17.1-bullseye-slim as builder

RUN npm install npm@8.19.2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

###

# final stage: start
FROM node:16.17.1-bullseye-slim

RUN npm install npm@8.19.2 pm2 -g

ENV NODE_ENV production
ENV PORT 8080

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
