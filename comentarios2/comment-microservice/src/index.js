const express = require('express');
const app = express();
const port = 3000;
const threadRoutes = require('./routes/threads');
const messageRoutes = require('./routes/messages'); // Importa las rutas de mensajes

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/threads', threadRoutes);
app.use('/api/messages', messageRoutes); // Usa las rutas de mensajes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
