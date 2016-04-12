FROM node:5-slim
WORKDIR /opt/app/
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
RUN mkdir ./public
RUN mkdir ./test
ADD public ./public
ADD test ./test
ADD index.js ./
EXPOSE 3000
ENTRYPOINT node index.js
