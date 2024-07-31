FROM nginx:latest

WORKDIR ./home/source
COPY . .

RUN tsc -b && vite build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]