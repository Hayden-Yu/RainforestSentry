FROM node:10
RUN npm -v
RUN mkdir /sentry
WORKDIR /sentry
COPY package.json /sentry
RUN npm install --only=production
COPY . /sentry
CMD ["npm", "start"]
EXPOSE 80