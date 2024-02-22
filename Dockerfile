FROM node:lts-alpine

WORKDIR /app

COPY . .
# first dot is the source, second dot is the destination folder /app

RUN npm install --only=production 
# removes dev dependencies

RUN npm run build --prefix client

USER node
# node has less privileges than the root user - minimizing the risk of security vulnerabilities

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000

