const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController'); 
router.get('/todos', todoController.index);         
router.post('/', todoController.store);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.destroy);

module.exports = router;