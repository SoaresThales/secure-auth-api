const db = require('../../../../shared/infra/database');

class UserRepository {
    //buscar um usuário por email
    async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1;';
        const { rows } = await db.query(query, [email]);
        return rows[0]; // Retorna o usuário encontrado
    }

    async create({ name, email, password }) {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at;';
        const values = [name, email, password];
        //executa a query e retorna o usuário criado
        const { rows } = await db.query(query, values);
        return rows[0]; // Retorna o usuário criado
    }
}


module.exports = new UserRepository();