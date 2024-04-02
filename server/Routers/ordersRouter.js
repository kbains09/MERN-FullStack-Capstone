const express = require('express');
const ordersController = require('../controllers/ordersController');

const router = express.Router();

router.post('/', ordersController.createOrder);
router.get('/:id', ordersController.getOrderById);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
