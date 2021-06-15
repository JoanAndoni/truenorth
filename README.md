# TrueNorth Taks API - Backend developer interview

API made in Node.js that allows the user to create tasks from consuming [Hipster Ipsium API](https://hipsum.co/the-api/) and saves them to a MongoDB database in Atlas, also you can retrieve them and update "done" status.  

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install TrueNorth Taks API.

```bash
npm i
```
* I suggest to use [postman](https://www.postman.com/) to make the test petitions I left the [collection of petitions](https://github.com/JoanAndoni/truenorth/blob/main/Truenorth_Backend.postman_collection.json) in the repository.

## Usage

- The credentials for the database are in the file: example.env so you will need to execute the following code to use them before running the code: 

> I know leaving the credentials on the repository is a bad practice, I did it so you don't have to create one to use the API

```bash
cp example.env .env
```

- Start the app

```bash
npm start
```

> I made an extra petition which is the `/retreiveTasksFromAPI` so we can populate the DB and remove the idempotency. This route is a GET petition with a param named `noTasks = Number of tasks` so we can populated with the number of tasks that we want from [Hipster Ipsium API](https://hipsum.co/the-api/)

Start consuming the endpoints :rocket: