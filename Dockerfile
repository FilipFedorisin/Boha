FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY next.config.js .env .npmrc .nvmrc postcss.config.js tailwind.config.js ./
COPY src public ./

CMD ["npm", "dev"]