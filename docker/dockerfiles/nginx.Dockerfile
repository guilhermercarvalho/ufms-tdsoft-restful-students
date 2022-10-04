FROM nginx

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -subj  "/C=CA/ST=QC/O=Company Inc/CN=example.com" \
    -keyout /etc/ssl/private/cert.key \
    -out /etc/ssl/certs/cert.crt

RUN openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048


