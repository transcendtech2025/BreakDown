const express = require('express');
const { addContact } = require('../controllers/contactsController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, addContact);

module.exports = router;
