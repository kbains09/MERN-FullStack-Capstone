const express = require('express');
const paymentDetailsController = require('../controllers/paymentDetailsController'); 

const router = express.Router();

router.post('/', paymentDetailsController.createPaymentDetail);
router.get('/:id', paymentDetailsController.getPaymentDetailById);
router.put('/:id', paymentDetailsController.updatePaymentDetail);
router.delete('/:id', paymentDetailsController.deletePaymentDetail);

module.exports = router;
