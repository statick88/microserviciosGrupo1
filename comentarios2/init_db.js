const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Crear la tabla `threads`
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS threads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT UNIQUE
  )`);
});

db.close();
