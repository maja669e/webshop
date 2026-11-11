FROM node:24-alpine
WORKDIR /app

# The WordPress address is needed while Next.js builds the pages.
ARG WORDPRESS_API_URL
ENV WORDPRESS_API_URL=$WORDPRESS_API_URL

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
