# 0. Builder Phase
FROM node:alpine as builder 

WORKDIR '/app'
COPY package.json .
RUN npm install
# No need for volume management, because we are not making any changes here
COPY . . 
RUN npm run build

# 1. Run Phase. 2nd FROM statement will start new phase
FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html