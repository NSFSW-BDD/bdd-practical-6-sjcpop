const express = require('express');
const router = express.Router();

const furnitureController = require('../controllers/furnitureController');

//define your routes
router.get('/',furnitureController.readAllFurniture);
router.post('/',furnitureController.createNewFurniture);

router.get('/:fid',furnitureController.readFurnitureById);
router.put('/:fid',furnitureController.updateFurnitureById);
router.delete('/:fid',furnitureController.deleteFurnitureById);



module.exports = router;