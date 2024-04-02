const knex = require('../knexfile');

const saveShippingInfo = async (req, res) => {
  try {
    const { name, email, address, country, postalCode } = req.body;
    // Store shipping information in MySQL database
    await knex('shipping_info').insert({ name, email, address, country, postal_code: postalCode });
    res.status(200).json({ message: 'Shipping information saved successfully' });
  } catch (error) {
    console.error('Error saving shipping information:', error);
    res.status(500).json({ error: 'An error occurred while saving shipping information' });
  }
};

module.exports = { saveShippingInfo };
