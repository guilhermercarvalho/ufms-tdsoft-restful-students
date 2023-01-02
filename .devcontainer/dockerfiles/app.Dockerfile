ARG VARIANT=0-16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

ENV TZ=America/Campo_Grande

ARG APT_PACKAGES="sqlite3 redis-tools"
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends ${APT_PACKAGES}

ARG NODE_MODULES="npm@9.2.0 nodemon pm2 tslint-to-eslint-config typescript"
RUN su node -c "npm install -g ${NODE_MODULES}"
