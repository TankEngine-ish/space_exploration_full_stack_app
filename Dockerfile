FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
# asterisk symbols includes the package-lock.json file

COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client


COPY server/ server/
USER node
# node has less privileges than the root user - minimizing the risk of security vulnerabilities

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000