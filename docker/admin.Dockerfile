FROM node:24-alpine

WORKDIR /app

COPY ./package*.json ./
COPY ./prisma ./prisma

COPY ./packages/shared/ ./packages/shared
COPY ./packages/admin/ ./packages/admin

RUN npm ci

RUN npx prisma generate

RUN npm run build --workspace=packages/admin

WORKDIR ./packages/admin

EXPOSE 3000

CMD ["npm", "run", "start"]