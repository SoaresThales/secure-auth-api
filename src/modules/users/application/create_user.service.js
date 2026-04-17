const bcrypt = require('bcrypt');

class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    // A função execute tem que estar solta aqui, direto dentro da classe
    async execute({ name, email, password }) {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userRepository.create({
            name,
            email,
            password: hashedPassword
        });

        return user;
    }
}

module.exports = CreateUserService;