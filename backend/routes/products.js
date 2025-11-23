const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET search products (autosuggest)
router.get('/search', async (req, res) => {
  try {
    const searchTerm = req.query.q;
    
    if (!searchTerm) {
      return res.json([]);
    }

    // Case-insensitive partial match, limit to 5 results
    const products = await Product.find({
      name: { $regex: searchTerm, $options: 'i' }
    }).limit(5);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
