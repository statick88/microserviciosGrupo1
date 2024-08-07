const { createMessage, getMessagesByThreadId } = require('../models/message');

const createNewMessage = (req, res) => {
  const { threadId, content } = req.body;
  const userId = req.user?.id; // Asegúrate de que req.user?.id esté definido, si estás usando autenticación
  createMessage(threadId, content, userId, (err, message) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(message);
  });
};

const getMessages = (req, res) => {
  const { threadId } = req.query;
  getMessagesByThreadId(threadId, (err, messages) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(messages);
  });
};

module.exports = { createNewMessage, getMessages };
