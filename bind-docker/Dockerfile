FROM node:21
WORKDIR /nextapp
ENV CHOKIDAR_USEPOLLING=true

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]