FROM mhart/alpine-node:13.7.0 
WORKDIR /app
COPY ./public .
COPY ./ .
COPY ./src .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-p", "80", "-s", "/app/build"]doc