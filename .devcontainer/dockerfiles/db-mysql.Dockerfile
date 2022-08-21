FROM mysql:5.7.38

COPY databases/dump/create-mysql.sql /docker-entrypoint-initdb.d/
