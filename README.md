# Fastify Auth API

A user registration and login API built with Fastify and MongoDB. Passwords are hashed with bcrypt, and successful logins return a JWT. The project also has Mongoose models for posts, comments, and likes.

## Stack

Node.js · Fastify · MongoDB · Mongoose · bcrypt · JWT

## API

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Log in and receive a JWT |

## Getting started

Requirements: Node.js and a MongoDB database.

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env` file:

   ```env
   DATABASE_URL=mongodb://localhost:27017/fastify_api
   SECRET_KEY=change-me
   ```

3. Start the server on port 3000:

   ```bash
   node server.js
   ```

## Project structure

```
app/
  app.js         Fastify instance, MongoDB connection, route registration
  auth/          register and login routes, controller, service
  users/models/  User model
  posts/models/  Post, Comment and Like models
server.js        entry point
```
