const db = require('src/database/db'); 

module.exports = { createAllTables };

// Create all tables async function
async function createAllTables() {
   await createUser
    await createMessage
}



// Create User table if it doesn't exist
async function createUser() {
    const query = `CREATE TABLE IF NOT EXISTS Users (
        Id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        mail VARCHAR(255) NOT NULL
    )`;
    await db.query(query);
}

// Create Message table if it doesn't exist
async function createMessage() {
    const query = `CREATE TABLE IF NOT EXISTS Message (
        Id INT PRIMARY KEY AUTO_INCREMENT,
        message VARCHAR(255) NOT NULL,
        time_now VARCHAR(255) NOT NULL
    )`;
    await db.query(query);
}

