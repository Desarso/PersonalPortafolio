FROM node:16.13.1


RUN mkdir -p /home/Portafolio

COPY . /home/Portafolio
WORKDIR /home/Portafolio

RUN npm i
RUN npm run build

CMD npm run start