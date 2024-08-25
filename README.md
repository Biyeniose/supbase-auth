# Next js Web App with Supabase

## Run the project in development mode with Docker

- cd into the project: `cd supbase_auth`
- Run the container in watch mode: `docker-compose -f docker-compose.dev.yml up --watch`
- Now you the Next js app is running and you can make changes
- Stop the container: Kill the Terminal + `docker-compose -f docker-compose.dev.yml down`
- Remove all unused images: `docker image prune -a`

Dont forget to include your environment variables in `.env` or `.env.local`

## Run the project in Production mode with Docker

- cd into the project: `cd supbase_auth`
- Run the container in watch mode: `docker-compose -f docker-compose.prod.yml up --build`
- Stop the container: Kill the Terminal + `docker-compose -f docker-compose.prod.yml down`
- Remove all unused images: `docker image prune -a`

Dont forget to include your environment variables in `.env` or `.env.local`
