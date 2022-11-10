FROM --platform=amd64 node:lts-alpine

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node prisma ./prisma

RUN npm run build:prisma

COPY --chown=node:node . .

RUN npm run build:app

CMD [ "npm", "run", "deploy" ]
