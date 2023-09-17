# Development stage
FROM node:16 as development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]

# Production stage
FROM node:16 as production

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN chmod +x runtime.sh

EXPOSE 3000

CMD ["./runtime.sh"]

