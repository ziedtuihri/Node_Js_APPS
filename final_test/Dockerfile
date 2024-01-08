FROM node:16

LABEL maintainer="Zied Touahri <zied.touahri@esprit.tn>"

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /home/node/app

USER node

EXPOSE 9090

CMD ["npm", "start"]
