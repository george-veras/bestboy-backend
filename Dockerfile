FROM node:lts-alpine

COPY . /var/current

RUN npm install --production

CMD ["npm", "start"]
