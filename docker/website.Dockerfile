FROM node:24-alpine

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY ./package*.json ./
COPY ./prisma ./prisma

COPY ./packages/shared/ ./packages/shared
COPY ./packages/site/ ./packages/site

RUN npm ci

RUN npx prisma generate

RUN npm run build --workspace=packages/site

WORKDIR ./packages/site

EXPOSE 3000

CMD ["npm", "run", "start"]