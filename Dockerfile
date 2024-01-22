FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

copy . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
