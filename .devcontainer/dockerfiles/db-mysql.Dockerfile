FROM mysql:5.7.38

COPY database/create-mysql.sql /docker-entrypoint-initdb.d/
