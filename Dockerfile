FROM node:14
EXPOSE 8123
WORKDIR /home/node/
RUN apt-get update && apt-get install -y ffmpeg

RUN npm init -y
RUN npm install discord.js@12.3.1
RUN npm install ffmpeg fluent-ffmpeg @discordjs/opus ytdl-core
COPY . .

CMD ["node","/home/node/index.js"]


#docker build -t discord:1.0.3 .
#sudo docker container run -d --name Docker-Discord-Bot discord:1.0.3
