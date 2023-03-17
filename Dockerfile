FROM node:lts-alpine
WORKDIR /home/app
COPY .sequelizerc .
COPY package.json .
RUN npm install
COPY ./app ./app
CMD ["npm","run","dev"]