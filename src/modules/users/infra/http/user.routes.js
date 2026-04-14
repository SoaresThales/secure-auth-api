const { Router } = require('express');
const userController = require('./user.controller.js');

const userRoutes = Router();

// Define a rota POST para criar um novo usuário, que chama o método create do UserController
userRoutes.post('/', userController.create);

module.exports = userRoutes;