const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

//create your routes eg router.get('/', controller.readAllUser);
router.get('/',jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin,controller.getAllUser);
router.post('/',controller.createNewUser);

router.get('/:userid',controller.getUserById);
router.put('/:userid',controller.updateUserById);
router.delete('/:userid',controller.deleteUserById);
router.post("/login", controller.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports = router;