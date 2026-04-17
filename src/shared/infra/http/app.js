// importa o módulo express para criar o servidor HTTP
const express = require('express');
// importa as rotas de usuário para serem usadas no aplicativo
const userRoutes = require('../../../modules/users/infra/http/user.routes.js');
const authRoutes = require('../../../modules/auth/auth.routes.js');


// cria uma instância do express para configurar o aplicativo
const app = express();
// configura o app para usar JSON no corpo das requisições
app.use(express.json());
// todas as rotas de usuário estarão disponíveis em /users
app.use('/api/users', userRoutes);
// ... outras rotas ...
app.use('/api/auth', authRoutes);
// exporta o app para ser usado em outros arquivos, como o server.js
module.exports = app;