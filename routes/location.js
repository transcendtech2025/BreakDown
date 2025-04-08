const express = require('express');
const { updateLocation } = require('../controllers/locationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/update', authMiddleware, updateLocation);

module.exports = router;
