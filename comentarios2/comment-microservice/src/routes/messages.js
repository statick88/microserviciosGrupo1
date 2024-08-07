const express = require('express');
const router = express.Router();
const { createNewMessage, getMessages } = require('../controllers/messageController');

router.post('/', createNewMessage); // Asegúrate de que la ruta POST esté aquí
router.get('/', getMessages);

module.exports = router;
