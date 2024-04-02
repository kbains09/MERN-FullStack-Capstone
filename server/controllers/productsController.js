const { get } = require('../Routers/productsRouter');

const knex = require('knex')(require('../knexfile'));

const getAllProducts = async (req, res) => {
  try {
    const products = await knex('products').select('*');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await knex('products').select('*').where('id', req.params.id).first();
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).send('Missing required fields');
    }
    const [newProduct] = await knex('products').insert({
      name,
      description,
      price
    }).returning('*'); // Adjust columns as per your table's design

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updatedProduct = await knex('products').where('id', req.params.id).update({
      name,
      description,
      price
    }).returning('*');

    if (updatedProduct.length === 0) {
      return res.status(404).send('Product not found');
    }

    res.json(updatedProduct[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleteCount = await knex('products').where('id', req.params.id).delete();
    if (deleteCount === 0) {
      return res.status(404).send('Product not found');
    }
    res.status(204).send(); // No Content
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await knex('products').select('*').where('name', 'like', `%${q}%`);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  searchProducts: searchProducts
};
