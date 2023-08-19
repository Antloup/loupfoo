ARG DE_STAGE
# Stage 1: Build the application
FROM node:current-alpine as build
WORKDIR /usr/src/app

# Copy package.json, package-lock.json and environnement files to the working directory
COPY package*.json ./
COPY .env* ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite application
RUN if [ "$DE_STAGE" = "dev" ]; then npm run build-dev ; else npm run build ; fi

# Stage 2: Create a production-ready image
FROM node:current-alpine as prod

WORKDIR /usr/src/app

# Copy the build artifact from the previous stage
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/package-lock.json ./package-lock.json

# Install http server
RUN npm install -g http-server

# Install required dependencies
RUN if [ "$DE_STAGE" = "dev" ]; then npm install ; else npm install --production ; fi

# Exposing the port of the application
EXPOSE 8100

# Start the application
CMD [ "http-server", "-p 8100", "/usr/src/app/build" ]
