FROM node:18-alpine  # Use a lightweight Node.js base image

WORKDIR /app

COPY package*.json ./  # Copy package.json and package-lock.json (if used)
RUN npm install  # Install dependencies from package.json

COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]  # Start the Node.js application
