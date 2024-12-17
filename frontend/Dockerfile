# Use Node.js as the base image
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /var/www/html/personal/melodyhub/melodyhub_frontend

# Copy package.json first
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Create the build file
RUN npm run build

# Now start the second stage using nginx
FROM nginx:alpine

# Copy the build output from the previous "build" stage
COPY --from=build /var/www/html/personal/melodyhub/frontend/build /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start the app
CMD ["nginx", "-g", "daemon off;"]