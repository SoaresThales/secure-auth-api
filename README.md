# Secure Auth API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A robust Authentication REST API built with a focus on **Clean Architecture**, **Domain-Driven Design (DDD)** principles, and **Test-Driven Development (TDD)**. This project provides a secure and scalable environment for user management and session handling.

## 🛠 Technologies & Tools

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Environment:** Docker & Docker Compose
- **Testing:** Jest & Supertest
- **Security:** Bcrypt (Password hashing) & JSON Web Tokens (JWT)
- **Environment Variables:** Dotenv

## 🏗 Architecture & Patterns

The project follows a strict separation of concerns to ensure maintainability and scalability:
- **Controllers:** Handling I/O operations (HTTP requests/responses).
- **Services:** Core business logic implementation.
- **Repositories:** Data persistence layer and database communication.
- **Middlewares:** Global error handling and request interception.
- **Entities/Models:** Domain objects and business rules.

## 🏁 Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- Docker and Docker Compose

### Installation
1. Clone the repository.
2. Install dependencies:
```bash
npm install
```
3. Setup your environment variables based on .env.example.

### Running with Docker

To spin up the database infrastructure:
```bash
docker-compose up -d
```

### Running Tests

To execute the automated test suite:
```bash
npm test
```

## 📅 Roadmap

    [x] V1.0.0: Base structure, PostgreSQL integration via Docker, and User Registration (TDD).

    [x] V2.0.0: Login implementation and JWT token generation.

    [ ] V3.0.0: Authorization middlewares and protected routes.

    [ ] V4.0.0: Password recovery and email confirmation.

## Developed by Thales Soares
