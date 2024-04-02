const knex = require('knex')(require('../knexfile')); 

const createOrderDetail = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price_at_time } = req.body;
    const [orderDetailId] = await knex('order_details').insert({
      order_id,
      product_id,
      quantity,
      price_at_time
    });
    res.status(201).json({ message: "Order detail created successfully", orderDetailId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getOrderDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetail = await knex('order_details').where({ id }).first();
    if (!orderDetail) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    res.json(orderDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updateOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price_at_time } = req.body;
    const updated = await knex('order_details').where({ id }).update({
      quantity,
      price_at_time
    });
    if (!updated) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    res.json({ message: "Order detail updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await knex('order_details').where({ id }).delete();
    if (!deleted) {
      return res.status(404).json({ message: 'Order detail not found' });
    }
    res.json({ message: "Order detail deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrderDetail: createOrderDetail,
  getOrderDetailById: getOrderDetailById,
  updateOrderDetail: updateOrderDetail,
  deleteOrderDetail: deleteOrderDetail
};
