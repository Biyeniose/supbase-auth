# Stage 1: Base
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies) for development
RUN npm install

# Stage 2: Development
FROM base AS development
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run", "dev"]

# Stage 3: Production
FROM base AS production
ENV NODE_ENV=production
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
