FROM node:5-slim
RUN mkdir -p /opt/app
ADD index.js public test /opt/app/
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

