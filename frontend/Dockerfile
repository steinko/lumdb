FROM mhart/alpine-node:13.7.0 
WORKDIR /app
COPY ./frontend/public .
COPY ./frontend .
COPY ./frontend/src .
RUN npm install
RUN npm run build
CMD ["serve", "-p", "80", "-s", "/app/build"]doc