# Use Node.js as the base image
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /var/www/html/personal/melodyhub/frontend

# Copy package.json first
COPY package.json ./

# Copy the rest of the application files
COPY . .

# Install the dependencies
RUN npm install

# # Create the build file
# RUN npm run build

# # Now start the second stage using nginx
# FROM nginx:alpine

# # Copy the build output from the previous "build" stage
# COPY --from=build /var/www/html/personal/melodyhub/frontend/build /usr/share/nginx/html

# # Expose the port the app will run on
# EXPOSE 80

# # Start the app
# CMD ["nginx", "-g", "daemon off;"]


# # running this file on the local machine
# Expose the port that the app will run on (usually 5173 for React)
EXPOSE 5173

# Run the development server using `npm run dev`
CMD ["npm", "run", "dev"]