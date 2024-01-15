// imports
const express = require('express');
const mysql2 = require('mysql2');
const db = require('./database/db');

// create Express app
const app = express();

// database connection mysql

// json request
app.use(express.json());

// urlencoded request
app.use(express.urlencoded({ extended: true }));

// define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start the server
const PORT = 6060;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
