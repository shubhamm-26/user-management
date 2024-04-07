const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/getAll/', userController.getAllUsers);
router.post('/create/', userController.createUser);
router.get('/getUser/:id', userController.getUserById);
router.get('/getUserByName/:name', userController.getUserByName);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/random', userController.getRandomUser);
router.post('/checkUserExistence', userController.checkUserExistence);
router.get('/usersAboveAge', userController.usersAboveAge);
router.get('/listUserNames', userController.listUserNames);

module.exports = router;