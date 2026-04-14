# Secure Auth API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

API REST de autenticação desenvolvida com foco em Clean Architecture, princípios de DDD (Domain-Driven Design) e guiada por testes (TDD). O projeto visa fornecer um ambiente seguro e escalável para gerenciamento de usuários e sessões.

## Tecnologias e Ferramentas

- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **Ambiente:** Docker & Docker Compose
- **Testes:** Jest & Supertest
- **Segurança:** Bcrypt (Hashing de senhas)
- **Variáveis de Ambiente:** Dotenv

## Arquitetura e Padrões

O projeto utiliza uma divisão clara de responsabilidades para facilitar a manutenção e evolução:

- **Controllers:** Manipulação de entradas e saídas (HTTP).
- **Services:** Implementação das regras de negócio.
- **Repositories:** Camada de persistência e comunicação com o banco de dados.
- **Middlewares:** Tratamento de erros e interceptações de requisição.

## Como rodar o projeto

### 1. Pré-requisitos

- Node.js instalado
- Docker e Docker Compose instalados

### 2. Instalação

1. Clone o repositório.
2. Instale as dependências:

```bash
   npm install
```

3. Configure o arquivo .env baseado no .env.example.

### Execução com Docker

Para subir a infraestrutura de banco de dados:

```
    docker-compose up -d
```

### Rodando Testes

Para executar a suíte de testes automatizados:

```
    npm test
```

### Roadmap de Evolução

[x] V1.0.0: Estrutura base, integração com PostgreSQL via Docker e fluxo de cadastro de usuário (TDD).

[ ] V2.0.0: Implementação de login e geração de tokens JWT.

[ ] V3.0.0: Middlewares de autorização e proteção de rotas.

[ ] V4.0.0: Recuperação de senha e confirmação de e-mail.

---

### 2. Ordem de comandos no Terminal (serVaio)

Como você já está com a pasta pronta e configurada no Linux, execute estes comandos na sequência para enviar ao GitHub via SSH:

```
# Inicializa o repositório local
git init

# Adiciona todos os arquivos (o .gitignore vai filtrar o que não deve subir)
git add .

# Faz o primeiro commit
git commit -m "feat: implement user registration flow with TDD and clean architecture"

# Renomeia a branch para master (conforme solicitado)
git branch -M master

# Adiciona o endereço do seu repositório remoto (Substitua USER e REPO pelos seus dados)
git remote add origin git@github.com:SEU_USUARIO/secure-auth-api.git

# Envia para o GitHub
git push -u origin master
```
