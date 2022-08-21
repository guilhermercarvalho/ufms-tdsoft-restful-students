FROM postgres:14-alpine3.14

COPY databases/dump/create-postgres.sql /docker-entrypoint-initdb.d/
COPY databases/dump/insert.sql /docker-entrypoint-initdb.d/
