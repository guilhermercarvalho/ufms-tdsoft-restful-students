FROM postgres:14-alpine3.14

COPY database/create-postgres.sql /docker-entrypoint-initdb.d/
COPY database/insert.sql /docker-entrypoint-initdb.d/
