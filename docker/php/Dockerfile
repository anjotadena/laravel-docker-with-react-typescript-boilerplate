FROM php:7.4-fpm-alpine

ADD ./docker/php/www.conf /usr/local/etc/php-fpm.d/www.conf

RUN addgroup -g 1000 developer && adduser -G developer -g developer -s /bin/sh -D developer

RUN mkdir -p /var/www/html

RUN chown developer:developer /var/www/html

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql
