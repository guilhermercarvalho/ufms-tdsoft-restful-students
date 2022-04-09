#!/usr/bin/env bash

docker rm --volumes --force restfull-students-app restfull-students-db

docker volume rm --force vscode

docker rmi guilhermercarvalho/restfull-students-app:v1.0.dev guilhermercarvalho/restfull-students-db-psql14:v1.0.dev