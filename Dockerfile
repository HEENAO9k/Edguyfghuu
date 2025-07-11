FROM node:20

# ติดตั้ง ffmpeg และ imagemagick
RUN apt update && apt install -y ffmpeg imagemagick

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]