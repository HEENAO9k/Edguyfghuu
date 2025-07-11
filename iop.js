FROM node:20

# ติดตั้ง ffmpeg และ imagemagick
RUN apt update && apt install -y ffmpeg imagemagick

# ตั้งโฟลเดอร์ทำงาน
WORKDIR /app

# คัดลอกโค้ดทั้งหมด
COPY . .

# ติดตั้งแพ็กเกจ npm
RUN npm install

# เปิดพอร์ต
EXPOSE 3000

# รันแอป
CMD ["node", "server.js"]