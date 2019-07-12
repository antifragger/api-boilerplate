# API Boilerplate

## Specifications

### Requirements

- NodeJS (https://nodejs.org/en)
- MongoDB instance (free hosted sandbox available on https://www.mongodb.com/cloud/atlas)

### Packages

#### Dependencies

- Joi (https://www.npmjs.com/package/@hapi/joi)<br />
  Object schema description language and validator for JavaScript objects

- Mongoose (https://www.npmjs.com/package/mongoose)<br />
  Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment

- Express (https://www.npmjs.com/package/express)<br />
  Fast, unopinionated, minimalist web framework for node

- Dotenv (https://www.npmjs.com/package/dotenv)<br />
  Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

- Body parser (https://www.npmjs.com/package/body-parser)<br />
  Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

- Cors (https://www.npmjs.com/package/cors)<br />
  A library that helps you manage Cross-Origin Resource Sharing

#### DevDependencies

- Nodemon (https://www.npmjs.com/package/nodemon)<br />
  This is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected

#### Optional extensions

- BcryptJS (https://www.npmjs.com/package/bcrypt)<br />
  A library to help you hash passwords

- JSON Webtoken (https://www.npmjs.com/package/json-web-token)<br />
  JWT encode and decode for Node.js

- UUID (https://www.npmjs.com/package/uuid)<br />
  Simple, fast generation of RFC4122 UUIDS. Can be used to create unique random ID's. MongoDB will create their own id's automatically


## Usage

### Environment variables

For local purposes, you can add a .env file by duplicating the `.env.template` file and renaming it to `.env`.

### What database should I use?

This boilerplate is set up to be used with a mongoDB environment, for testing purposes you can create a sandbox environment through https://www.mongodb.com/cloud/atlas. You will get a generated `DB` and `SECRET` parameter that you apply in the .env file.

### Scripts

- `npm run start`<br />
  Nodemon will start the server and watch for changes

### I want to delete all the demo files

Run `./clearDemoFiles.sh`. This will remove all demo files and the shell script itself, so you have a fresh start!
