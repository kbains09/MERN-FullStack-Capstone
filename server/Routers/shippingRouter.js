const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');

// Route to post customer shipping info to DB
router.post('/', shippingController.saveShippingInfo);

module.exports = router;
