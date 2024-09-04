const express = require('express');
const userController = require('../controllers/users.js')
const router = express.Router()

// Create post using post methods
router.post('/',userController.create)
// Read GET /products
router.get('/',userController.getAll)
// Read single products
router.get('/:id',userController.getSingle)
// Update Product using PUT
router.put('/:id',userController.replace)
router.patch('/:id',userController.update)
 // Delete Products
 router.delete('/:id',userController.delete)

 exports.router = router;