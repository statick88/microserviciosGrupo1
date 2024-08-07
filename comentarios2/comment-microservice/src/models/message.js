const db = require('../config/db');

// Crear un nuevo mensaje
const createMessage = (threadId, content, userId, callback) => {
  const sql = 'INSERT INTO messages (threadId, content, userId) VALUES (?, ?, ?)';
  db.run(sql, [threadId, content, userId], function(err) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, { id: this.lastID, threadId, content, userId });
  });
};

// Obtener mensajes por ID de hilo
const getMessagesByThreadId = (threadId, callback) => {
  const sql = 'SELECT * FROM messages WHERE threadId = ?';
  db.all(sql, [threadId], (err, rows) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, rows);
  });
};

module.exports = { createMessage, getMessagesByThreadId };
