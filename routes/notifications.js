const express = require('express');
const { sendNotification } = require('../controllers/notificationsController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/send', authMiddleware, sendNotification);

module.exports = router;
