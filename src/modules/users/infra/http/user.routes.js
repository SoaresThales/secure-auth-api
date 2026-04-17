const { Router } = require('express');

// 1. Importações
const UserRepository = require('../persistence/user.repository');
const CreateUserService = require('../../application/create_user.service'); 
const UserController = require('./user.controller');

// 2. Construção e Injeção de Dependências
const userRepository = new UserRepository(); 
const createUserService = new CreateUserService(userRepository); 
const userController = new UserController(createUserService);

const userRoutes = Router();

// 3. A Rota
userRoutes.post('/', userController.create.bind(userController));

module.exports = userRoutes;