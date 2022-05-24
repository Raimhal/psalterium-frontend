FROM node:lts-alpine

WORKDIR /code/frontend

ARG VUE_APP_API_URL
ENV VUE_APP_API_URL ${VUE_APP_API_URL}

RUN npm install @vue/cli@4.5.15 -g

COPY package.json .
COPY package-lock.json .

RUN npm install

CMD ["npm", "run", "serve"]