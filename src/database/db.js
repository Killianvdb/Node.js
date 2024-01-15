//database connection
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'talker',
  });

    //connect to database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Verbonden met de database');
  });