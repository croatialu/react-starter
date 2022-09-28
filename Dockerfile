FROM node:alpine as builder

WORKDIR /app

RUN corepack enable

ADD .npmrc package.json pnpm-lock.yaml /app/

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

ADD . /app

RUN pnpm build

FROM nginx:alpine

ADD nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
