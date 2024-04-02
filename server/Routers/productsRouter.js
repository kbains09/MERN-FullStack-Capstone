const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// List all products
router.route('/', productsController.getAllProducts);
// Get a single product details
router.route('/:id', productsController.getProductById);
// Create a new product 
router.route('/', productsController.createProduct);
// Update a product 
router.route('/:id', productsController.updateProduct);
// Delete a product 
router.route('/:id', productsController.deleteProduct);
// Search for products
router.route('/search', productsController.searchProducts);

module.exports = router;
