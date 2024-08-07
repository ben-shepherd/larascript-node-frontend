# ./larascript-node-frontend/Dockerfile

# Stage 1: Build the React app with Vite
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx and configure Let's Encrypt
FROM nginx:latest

# Install Certbot
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx

# Copy the Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app
COPY --from=build /app/dist /usr/share/nginx/html

# Renew SSL certificates automatically
RUN echo "0 0,12 * * * root certbot renew --quiet --nginx" > /etc/cron.d/certbot-renewal

# Expose the ports
EXPOSE 80 443

# Start Nginx and Cron
CMD ["nginx", "-g", "daemon off;"]