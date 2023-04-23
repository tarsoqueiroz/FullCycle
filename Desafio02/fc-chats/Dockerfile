# Use the official Node.js v14 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Start the Node.js app
CMD [ "npm", "start" ]
