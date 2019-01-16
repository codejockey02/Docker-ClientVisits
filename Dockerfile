FROM node:alpine

WORKDIR '/users/priyesh_saraswat/app'

COPY package.json ./
RUN npm install

COPY ./ ./
CMD ["npm","start"]