#!/bin/bash
# ./deploy.sh chaotic-test 9993 4000

filename=$1
echo "server {
    server_name  119.29.236.44;
    listen $2 default;
    access_log      /var/log/nginx/$1-access.log main;
    error_log     a  /var/log/nginx/$1-error.log notice;

    root    /var/www/html/$1;
    index   index.html;
    location ~^/backend/(.*)?(.*)$ {
      proxy_pass http://127.0.0.1:$3/;
      proxy_set_header Upgrade;
      proxy_http_version 1.1;
      proxy_set_header Connection "upgrade";
    }
}" > $1.conf  

mv ./${filename}.conf /etc/nginx/vhost/

cd /var/log/nginx/
touch $1-access.log
touch $1-error.log

