const db = require('src/database/db');

class Message {
    async getAllMessage() {
        const query = 'SELECT * FROM Message';
        const [messages] = await db.query(query);
        return messages;
    }

    async getMessageById(id) {
        const query = 'SELECT * FROM Message WHERE Id = ?';
        const [message] = await db.query(query, [id]);
        return message;
    }

    async addMessage(message,time_now) {
        const query = 'INSERT INTO Message (message,time_now) VALUES (?, ?)';
        const result = await db.query(query, [message,time_now]);
        return result;
    }

    async updateMessage(id, message,time_now) {
        const query = 'UPDATE Message SET message = ?,time_now = ? WHERE Id = ?';
        const result = await db.query(query, [message,time_now, id]);
        return result;
    }

    async deleteMessage(id) {
        const query = 'DELETE FROM Message WHERE Id = ?';
        const result = await db.query(query, [id]);
        return result;
    }
}

module.exports = Message;