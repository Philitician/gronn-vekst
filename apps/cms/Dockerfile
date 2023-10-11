FROM node:18.18 as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN npm install -g pnpm
RUN pnpm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]