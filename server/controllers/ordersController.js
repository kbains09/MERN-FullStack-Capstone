const knex = require('knex')(require('../knexfile'));

const createOrder = async (req, res) => {
  try {
    const { user_id, status, total_price } = req.body;
    const [orderId] = await knex('orders').insert({ user_id, status, total_price });
    res.status(201).json({ message: "Order created successfully", orderId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await knex('orders').where({ id }).first();
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, total_price } = req.body;
    const updated = await knex('orders').where({ id }).update({ status, total_price });
    if (!updated) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await knex('orders').where({ id }).delete();
    if (!deleted) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder: createOrder,
  getOrderById: getOrderById,
  updateOrder: updateOrder,
  deleteOrder: deleteOrder
};
