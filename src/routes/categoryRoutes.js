const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const furnitureController = require('../controllers/furnitureController');

//define your routes
router.get('/',categoryController.selectAll);
router.post('/',categoryController.createNewCategory);
router.get('/:catid',categoryController.readCategoryById);
router.put('/:catid',categoryController.updateCategoryById);
router.delete('/:catid',categoryController.deleteCategoryById);
router.get('/:categoryId/furniture', furnitureController.readFurnitureByCategory);

module.exports = router;