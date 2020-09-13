FROM nginx:stable-alpine

ADD ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html

RUN addgroup -g 1000 developer && adduser -G developer -g developer -s /bin/sh -D developer

RUN chown developer:developer /var/www/html
