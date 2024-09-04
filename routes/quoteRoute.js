const express = require('express');
const quoteController = require('../controllers/quotes.js')
const router = express.Router()

// Create post using post methods
router.post('/',quoteController.create)
// Read GET /products
router.get('/',quoteController.getAll)
// Read single products
router.get('/:id',quoteController.getSingle)
// Update Product using PUT
router.put('/:id',quoteController.replace)
router.patch('/:id',quoteController.update)
 // Delete Products
 router.delete('/:id',quoteController.delete)

 exports.router = router;