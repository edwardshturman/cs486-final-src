FROM oven/bun:1.2.4

RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/backend
COPY package.json ./
COPY bun.lock ./
RUN bun install

COPY . ./

EXPOSE 8081
CMD [ "bun", "run", "serve" ]
