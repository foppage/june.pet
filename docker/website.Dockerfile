FROM node:24-alpine

WORKDIR /app

COPY ./package*.json ./
COPY ./prisma ./prisma

COPY ./packages/shared/ ./packages/shared
COPY ./packages/site/ ./packages/site

RUN npm install

RUN npx prisma generate

RUN npm run build --workspace=packages/site

WORKDIR ./packages/site

EXPOSE 3000

CMD ["npm", "run", "start"]