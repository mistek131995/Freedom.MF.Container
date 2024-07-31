FROM nginx:latest

COPY . ./home/source

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]