## Architecture

At the highest level, Grace Shopper is split into four parts:

- Client
- Public
- Script
- Server

### Client

The client files are written in JavaScript, with React components, utilizing Redux and React Router libraries, as well as CSS Modules through Style Loader.

Main entry point: client/index.js
Structured into:

- app
  - Redux store
  - React structure
- features
  - client facing Pages and React components
  - Redux slices + asyncThunks
  - style sheets for pages and components

## Public

All the code being served to the client. Including a webpack compiled bundle.js file from our client and server folders.

## Script

All the seed data and functions for our PostgreSQL database, written in Javascript and Sequelize.
Main entry point: script/seed.js
Function is being called anytime we initialize the server.

## Server

The server files are written in Javascript and run on Node.js, utilizing Express routes, and Sequelize to communicate with our PostgreSQL database.

Main entry point: server/index.js

- launches seed function
- launches app.js - which pulls together our Express routes and loads our Middleware

Server is structured into:

- api
  - express routes for main components, bundled in our main entry point: server/api/index.js
- auth
  - express routes for the authorization component, combined in server/auth/index.js
- db
  - main entry point: server/db/index.js
    - creates associations between Sequelize models
  - server/db/models holds all Sequelize models
