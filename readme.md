# Customer Support Backend

## About the project

This project was created as an exercise for a tech interview. Notable features include being able to send issue tickets to a database, seeing them listed in an API and having a ticket summary sent to the server admin after submission.

### Tech Stack

The project uses the following libraries, languages and frameworks:
|Name|Type|Description|
|----|----|-----------|
|Node.js|Framework|Server environment|
|Typescript|Language|Superset of JavaScript|
|Express.js|Library|HTTP Server|
|Mongoose|Library|Object modeling tool for MongoDB|
|Nodemailer|Library|Used to send emails from the server|
|Validator.js|Library|Data validation|

## Installation & Prerequisites

_All commands should be run in the project folder unless specified otherwise._

Before installing and running the project, you should have a .env-file created in the project root folder. A template for this has been given below:

```env
URL=<Server URL, optional>
PORT=<Server port, optional>
MONGODB_URI=<URI for MongoDB database>
SENDER_EMAIL=<Domain to send emails from>
SENDER_PASSWORD=<Credentials for sender email>
RECEIVER_EMAIL=<Domain to send emails to>
```

You should also have MongoDB installed and running or use MongoDB Atlas with a precreated project. For more information, refer to this website: <https://www.mongodb.com/docs/atlas/>

Installing the project is made simple with Node.js. You'll need to install dependencies by running:

```sh
npm install
```

## Running

For spinning up the production environment, simply run:

```sh
npm run build && npm start
```

As for the development version, it's even easier:

```sh
npm run dev
```

For double checking that the server works, the console should read:

```none
Connected successfully, url: "http://localhost:8080" (or a custom one if set)
Connected successfully to MongoDB.
```

Furthermore, if you navigate to \<url>:\<port>/api/issues, you should either see a blank page or some data if any were already entered.

## Uninstallation

Simply delete the project folder from your computer.
