# specify the node base image with your desired version node:<version>
FROM node:8

MAINTAINER hisasann

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

# Bundle app source
ADD ./src /src/src/

# Install app dependencies
COPY .babelrc /src/.babelrc
COPY .eslintrc.js /src/.eslintrc.js
COPY .prettierrc /src/.prettierrc
COPY jest.config.js /src/jest.config.js
COPY nuxt.config.ts /src/nuxt.config.ts
COPY tsconfig.json /src/tsconfig.json
COPY package.json /src/package.json
COPY yarn.lock /src/yarn.lock
COPY run-test.sh /src/run-test.sh

RUN chmod 755 /src/run-test.sh

RUN cd /src; yarn install

EXPOSE 3000

WORKDIR /src

RUN npm run build

CMD ["npm", "run", "start"]
