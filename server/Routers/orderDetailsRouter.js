const express = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');

const router = express.Router();

router.post('/', orderDetailsController.createOrderDetail);
router.get('/:id', orderDetailsController.getOrderDetailById);
router.put('/:id', orderDetailsController.updateOrderDetail);
router.delete('/:id', orderDetailsController.deleteOrderDetail);

module.exports = router;
