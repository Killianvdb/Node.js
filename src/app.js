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
});

//update user
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username,mail } = req.body;
  const result = await db.updateUsers(id, username,mail);
  res.json(result);
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
});

//update message
app.put('/messages/:id', async (req, res) => {
  const { id } = req.params;
  const { message,time_now } = req.body;
  const result = await db.updateMessage(id, message,time_now);
  res.json(result);
});

//delete message
app.delete('/messages/:id', async (req, res) => {
  const { id } = req.params;
  const result = await db.deleteMessage(id);
  res.json(result);
});



