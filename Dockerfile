FROM nginx:latest

WORKDIR ./home/source
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]