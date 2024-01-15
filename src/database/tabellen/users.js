const db = require('src/database/db');

class Users {
    async getAllUsers() {
        const query = 'SELECT * FROM Users';
        const [Userss] = await db.query(query);
        return Userss;
    }

    async getUsersById(id) {
        const query = 'SELECT * FROM Users WHERE Id = ?';
        const [Users] = await db.query(query, [id]);
        return Users;
    }

    async addUsers(username,mail) {
        const query = 'INSERT INTO Users (username,mail) VALUES (?, ?)';
        const result = await db.query(query, [username,mail]);
        return result;
    }

    async updateUsers(id, username,mail) {
        const query = 'UPDATE Users SET userName = ?,  = ? WHERE Id = ?';
        const result = await db.query(query, [username,mail, id]);
        return result;
    }

    async deleteUsers(id) {
        const query = 'DELETE FROM Users WHERE Id = ?';
        const result = await db.query(query, [id]);
        return result;
    }
}

module.exports = Users;