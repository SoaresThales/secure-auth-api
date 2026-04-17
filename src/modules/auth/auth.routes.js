const { Router } = require('express');
const UserRepository = require('../users/infra/persistence/user.repository');
const AuthService = require('./auth.service');
const AuthController = require('./auth.controller');

const authRoutes = Router();

// Injeção de Dependências
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

// Bind mantém o contexto do 'this' dentro da classe
authRoutes.post('/login', authController.login.bind(authController));

module.exports = authRoutes;