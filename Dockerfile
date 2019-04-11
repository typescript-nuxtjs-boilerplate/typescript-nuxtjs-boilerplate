# specify the node base image with your desired version node:<version>
FROM node:8.10.0

MAINTAINER hisasann

# https://qiita.com/rh_taro/items/40373a30ead444ae9ca7
RUN echo "deb http://deb.debian.org/debian jessie main" > /etc/apt/sources.list \
 && echo "deb http://security.debian.org jessie/updates main" >> /etc/apt/sources.list

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    apt-transport-https \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# install yarn
# https://yarnpkg.com/en/docs/install#linux-tab
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update \
 && apt-get install -y \
    yarn \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install app dependencies
COPY package.json /src/package.json
COPY yarn.lock /src/yarn.lock
RUN cd /src; yarn install

# Bundle app source
ADD ./src /src/src/

# Copy files
COPY .babelrc /src/.babelrc
COPY .eslintrc.js /src/.eslintrc.js
COPY .prettierrc.js /src/.prettierrc.js
COPY jest.config.js /src/jest.config.js
COPY nuxt.config.ts /src/nuxt.config.ts
COPY tsconfig.json /src/tsconfig.json
COPY tools/run-test.sh /src/run-test.sh

# Run test
RUN chmod 755 /src/run-test.sh

EXPOSE 4000

WORKDIR /src

# RUNTIME 時の環境変数を Nuxt.js に渡すにはここに書くしか方法はない
ENV RUNTIME_ENV=docker
ENV BUILD_ENV=docker

RUN env

CMD ["/bin/sh", "-c", "npm run build:docker && npm run start"]
