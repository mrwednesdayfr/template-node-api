FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i --only=production
COPY src ./src
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "src/index.js"]
