FROM node:14.17 AS kpinetwork-base

ENV NX_PRODUCTION=true
ENV NX_NODE_ENV=production

WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install nx
RUN npm install
RUN npm ci
RUN node ./tools/build/version.js

RUN npm run nx build api
RUN npm prune --production -S

FROM node:14.17 AS kpinetwork-api
WORKDIR /app
COPY --from=kpinetwork-base /app/node_modules /app/node_modules
COPY --from=kpinetwork-base /app/dist/apps/api .
RUN mkdir -p /app/apps/api/src/assets/ && ln -s /app/assets/entities.json /app/apps/api/src/assets/entities.json

CMD ["node", "main.js"]
