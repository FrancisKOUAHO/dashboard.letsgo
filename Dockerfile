FROM node:16.17.1

WORKDIR /app


COPY yarn.lock .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs /app/
RUN pnpm install

COPY . /app

EXPOSE 3030

CMD [ "pnpm", "run", "dev" ]
