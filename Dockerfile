FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
USER node
CMD ["node", "-e", "console.log(require('./src/app').describe())"]
