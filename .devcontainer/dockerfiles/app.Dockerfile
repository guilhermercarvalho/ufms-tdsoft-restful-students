ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

ENV TZ=America/Campo_Grande

ARG APT_PACKAGES="sqlite3 redis-tools"
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends ${APT_PACKAGES}

ARG NODE_MODULES="npm@8.19.2 nodemon pm2 tslint-to-eslint-config typescript"
RUN su node -c "npm install -g ${NODE_MODULES}"
