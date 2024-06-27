# Use a lightweight Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the app dependencies
RUN npm install

COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Set the command to start the app for production
CMD ["npm", "start"]
