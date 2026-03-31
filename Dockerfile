FROM node:18-alpine

WORKDIR /usr/src/app

# Copy the server.js being in Host Server into Container run-time
COPY server.js .

CMD ["node","server.js"]
