FROM node:alpine as builder

WORKDIR '/app'

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

#The above step is going to install all our dependencies and build the project.

# build folder is going to be built in /app/build

# This new from statement will stop last node:alpine block
FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

