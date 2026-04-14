const bcrypt = require('bcrypt');
const userRepository = require('../infra/persistence/user.repository');

class CreateUserService {
    // A função execute tem que estar solta aqui, direto dentro da classe
    async execute({ name, email, password }) {

        const userAlreadyExists = await userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userRepository.create({
            name,
            email,
            password: hashedPassword
        });

        return user;
    }
}

// O segredo: module e o "new" instanciando a classe!
module.exports = new CreateUserService();