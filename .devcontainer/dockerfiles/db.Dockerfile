FROM postgres:14-alpine3.14

COPY database/dump-postgres.sql /docker-entrypoint-initdb.d/
