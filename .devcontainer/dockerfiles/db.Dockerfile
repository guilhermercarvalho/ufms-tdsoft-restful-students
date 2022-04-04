FROM postgres:14-alpine3.14

COPY database/dump.sql /docker-entrypoint-initdb.d/
