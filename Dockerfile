# Base image
FROM node:18

# Working directory inside container
WORKDIR /app

# Copy project files into container
COPY . .

# Expose port inside container
EXPOSE 3000

# Start command
CMD ["node", "app.js"]

