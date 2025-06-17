# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.



### SOME EXTRA THINGS

I ran the command "docker run -it --name react-dev -v "/c/Projects/React":/app -w /app -p 3000:3000 node:lts bash" in the command line after starting docker deskstop


# Inside the container
npx create-react-app content.frontend
cd content.frontend
npm start

npm create vite@latest content.frontend -- --template react
cd content.frontend
npm install
npm run dev

# Start the container if it's stopped
docker start react-dev
# Connect to the running container
docker exec -it react-dev bash

If you want to remove the react app and start over:
docker exec -it react-dev bash
cd /app
rm -rf content.frontend
npm create vite@latest content.frontend -- --template react
cd content.frontend
npm install
npm run dev


# Stop and Remove the container and Recreate it 

docker stop react-dev && docker rm react-dev

docker run -it --name react-dev -v /c/Projects/React:/app -w /app -p 3000:3000 node:lts bash

THE ABOVE COMMAND IS GOOD BECAUSE ONCE YOU CLONE THIS REPO YOU CAN JUST SPIN UP A CONTAINER AND CD IN TO content.frontend folder and run the command npm run dev . Just MAKE SURE THE -v /c/Projects/React:/app matches the path to the folder on your local machine that contains the code. YOU DONT EVEN HAVE TO HAVE NODE OR REACT INSTALLED FOR THIS TO WORK IT WILL RUN IN THE CONTAINER.

IF CONTAINER ALREADY EXISTS JUST RUN THE SECOND COMMAND TO START IT UP AGAIN.
docker start react-dev
docker exec -it react-dev  bash   


# If you would like to run dotnet and React together 

docker run -it --name react-dev \
  -v /c/Projects/React:/app \
  -w /app \
  -p 3000:3000 \
  -p 5000:5000 \
  node:lts bash -c "cd backend && dotnet run & cd /app && bash"

# How to Install Dotnet in Linux

# Install required packages
apt-get update && apt-get install -y wget apt-transport-https

# Download and install the Microsoft package signing key and add the package repository
wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb

# Install the SDK dependencies
apt-get update && apt-get install -y dotnet-sdk-9.0


# how to accomplish this via a single DOCKER File


```bash
FROM mcr.microsoft.com/dotnet/sdk:9.0

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app
COPY . .

EXPOSE 3000 5000

CMD bash -c "cd content.api && dotnet run & cd content.frontend && npm install && npm start"

```


Then build and run it:

```bash
docker build -t fullstack-dev .
docker run -it -p 3000:3000 -p 5000:5000 fullstack-dev
```