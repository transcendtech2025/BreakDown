const express = require('express');
const { getNearbyServices } = require('../controllers/servicesController');

const router = express.Router();

router.get('/nearby', getNearbyServices);

module.exports = router;
