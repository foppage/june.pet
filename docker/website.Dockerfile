FROM node:24-alpine

WORKDIR /app

COPY ./package*.json .
COPY ./app.config.ts .
COPY ./prisma ./prisma
COPY ./src ./src
COPY ./public ./public

RUN npm install

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]