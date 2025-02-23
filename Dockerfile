# Build stage for React frontend
FROM node:18-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Build stage for Express backend
FROM node:18-alpine AS server-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src/

# Final stage
FROM node:18-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy server source code
COPY --from=server-build /app/src ./src

# Copy client build files
COPY --from=client-build /app/client/build ./client/build

# Add express as a direct dependency
RUN npm install express cors

EXPOSE 3000
CMD ["node", "src/app.js"]