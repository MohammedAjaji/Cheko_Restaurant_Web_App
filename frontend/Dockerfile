# Use an official Node runtime as a parent image
FROM node:21.1.0-slim

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

# RUN yarn start

CMD [ "yarn", "start" ]


# # Set the working directory in the container
# WORKDIR /app

# # Copy the current directory contents into the container at /app
# COPY . .

# # Install Yarn and project dependencies
# RUN npm install -g yarn && yarn install

# # Build the project
# RUN yarn build

# # Install serve to serve the app
# RUN yarn global add serve

# # Make port 3000 available to the world outside this container
# EXPOSE 3000

# # Define environment variable
# ENV NODE_ENV production

# # Serve your app using serve when the container launches
# CMD ["serve", "-s", "build"]