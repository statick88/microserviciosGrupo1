const { createThread, getThreadById, getThreadByUrl: getThreadByUrlFromModel } = require('../models/thread');

const createNewThread = (req, res) => {
  const { url } = req.body;
  createThread(url, (err, thread) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(thread);
  });
};

const getThread = (req, res) => {
  const { id } = req.params;
  getThreadById(id, (err, thread) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!thread) return res.status(404).json({ message: 'Thread not found' });
    res.json(thread);
  });
};

const getThreadByUrl = (req, res) => {
    const { threadUrl } = req.query;
    console.log('Searching for URL:', threadUrl); // Agrega esto para depurar
    getThreadByUrl(threadUrl, (err, thread) => {
      if (err) {
        console.error('Error fetching thread:', err); // Agrega esto para depurar
        return res.status(500).json({ error: err.message });
      }
      if (!thread) return res.status(404).json({ message: 'Thread not found' });
      res.json(thread);
    });
  };
  

module.exports = { createNewThread, getThread, getThreadByUrl };
