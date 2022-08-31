#!/usr/bin/env bash

docker stop restfull-students-app restfull-students-db-postgres restfull-students-db-mysql restfull-students-cache-redis

docker rm --volumes --force restfull-students-app restfull-students-db-postgres restfull-students-db-mysql restfull-students-cache-redis

docker volume rm --force vscode

docker network rm ufms-tdsoft-restful-students_devcontainer_default

docker rmi guilhermercarvalho/restfull-students-app:v1.0.dev