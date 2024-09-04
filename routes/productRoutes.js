const express = require('express');
const productController = require('../controllers/product.js')
const router = express.Router()

// Create post using post methods
router.post('/',productController.create)
// Read GET /products
router.get('/',productController.getAll)
// Read single products
router.get('/:id',productController.getSingle)
// Update Product using PUT
router.put('/:id',productController.replace)
router.patch('/:id',productController.update)
 // Delete Products
 router.delete('/:id',productController.delete)

 exports.router = router;