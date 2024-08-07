const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const createThread = (url, callback) => {
  const sql = 'INSERT INTO threads (url) VALUES (?)';
  db.run(sql, [url], function (err) {
    if (err) return callback(err);
    callback(null, { id: this.lastID, url });
  });
};

const getThreadById = (id, callback) => {
  const sql = 'SELECT * FROM threads WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
};

const getThreadByUrl = (url, callback) => {
  const sql = 'SELECT * FROM threads WHERE url = ?';
  db.get(sql, [url], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
};

module.exports = { createThread, getThreadById, getThreadByUrl };
