// imports
const express = require('express');
const mysql = require('mysql');
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
const PORT = 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));



//get all users
app.get('/users', async (req, res) => {
  const users = await db.getAllUsers();
  res.json(users);
});

//get user by id
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await db.getUsersById(id);
  res.json(user);
});

//add user
app.post('/users', async (req, res) => {
  const { username,mail } = req.body;
  const result = await db.addUsers(username,mail);
  res.json(result);

  // controleer of de email een @ bevat
  if (mail.includes('@')) {
    // als de email een @ bevat, dan is het een geldig email adres
    console.log('Dit is een geldig email adres');
  } else {
    // als de email geen @ bevat, dan is het geen geldig email adres
    console.log('Dit is geen geldig email adres');
  }
});

//update user
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username,mail } = req.body;
  const result = await db.updateUsers(id, username,mail);
  res.json(result);

  // controleer of de email een @ bevat
  if (mail.includes('@')) {
    // als de email een @ bevat, dan is het een geldig email adres
    console.log('Dit is een geldig email adres');
  } else {
    // als de email geen @ bevat, dan is het geen geldig email adres
    console.log('Dit is geen geldig email adres');
  }

});

//delete user
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const result = await db.deleteUsers(id);
  res.json(result);
});

//get all messages
app.get('/messages', async (req, res) => {
  const messages = await db.getAllMessage();
  res.json(messages);
});

//get message by id
app.get('/messages/:id', async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessageById(id);
  res.json(message);
});

//add message
app.post('/messages', async (req, res) => {
  const { message,time_now } = req.body;
  const result = await db.addMessage(message,time_now);
  res.json(result);

  // controleer als er een message is ingevuld
  if (message) {
    // als er een message is ingevuld, dan is het een geldige message
    console.log('Dit is een geldige message');
  } else {
    // als er geen message is ingevuld, dan is het geen geldige message
    console.log('Dit is geen geldige message');
  }
  
});

//update message
app.put('/messages/:id', async (req, res) => {
  const { id } = req.params;
  const { message,time_now } = req.body;
  const result = await db.updateMessage(id, message,time_now);
  res.json(result);

  // controleer als er een message is ingevuld
  if (message) {
    // als er een message is ingevuld, dan is het een geldige message
    console.log('Dit is een geldige message');
  } else {
    // als er geen message is ingevuld, dan is het geen geldige message
    console.log('Dit is geen geldige message');
  }
});

//delete message
app.delete('/messages/:id', async (req, res) => {
  const { id } = req.params;
  const result = await db.deleteMessage(id);
  res.json(result);
});



