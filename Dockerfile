FROM node:latest

WORKDIR ./home/source
COPY . .

RUN apt update && apt -y install nginx # && apt -y install npm
RUN npm install && tsc -b && vite build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]