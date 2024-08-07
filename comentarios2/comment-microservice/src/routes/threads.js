const express = require('express');
const router = express.Router();
const { createNewThread, getThread, getThreadByUrl } = require('../controllers/threadController');

router.post('/', createNewThread);
router.get('/:id', getThread);
router.get('/', getThreadByUrl);

module.exports = router;
