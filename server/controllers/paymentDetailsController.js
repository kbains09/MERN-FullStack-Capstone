const knex = require('knex')(require('../knexfile')); 

const createPaymentDetail = async (req, res) => {
  try {
    const { order_id, payment_type, approval_code, payment_status } = req.body;
    const [paymentDetailId] = await knex('payment_details').insert({
      order_id,
      payment_type,
      approval_code,
      payment_status
    });
    res.status(201).json({ message: "Payment detail created successfully", paymentDetailId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getPaymentDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentDetail = await knex('payment_details').where({ id }).first();
    if (!paymentDetail) {
      return res.status(404).json({ message: 'Payment detail not found' });
    }
    res.json(paymentDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updatePaymentDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_type, approval_code, payment_status } = req.body;
    const updated = await knex('payment_details').where({ id }).update({
      payment_type,
      approval_code,
      payment_status
    });
    if (!updated) {
      return res.status(404).json({ message: 'Payment detail not found' });
    }
    res.json({ message: "Payment detail updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deletePaymentDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await knex('payment_details').where({ id }).delete();
    if (!deleted) {
      return res.status(404).json({ message: 'Payment detail not found' });
    }
    res.json({ message: "Payment detail deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPaymentDetail: createPaymentDetail,
  getPaymentDetailById: getPaymentDetailById,
  updatePaymentDetail: updatePaymentDetail,
  deletePaymentDetail: deletePaymentDetail
};
