FROM node:22-alpine AS base

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

FROM base AS dev

ENV NODE_ENV=development

RUN npm install --only=development

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

FROM base AS prod

ENV NODE_ENV=production

RUN npm run build

RUN npm prune --production

EXPOSE 3000

CMD ["node", "build"]
