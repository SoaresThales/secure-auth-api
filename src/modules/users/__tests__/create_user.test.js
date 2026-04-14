const request = require('supertest');
// =====Jest=====
const app = require('../../../shared/infra/http/app');
//=====Repositório de usuários=====
describe('User Creation Domain', () => {
    it('should receive a 201 status code when creating a valid user', async () => {
        //=====Gerar um e-mail único para cada teste=====
        const uniqueEmail = `john_${Date.now()}@example.com`;
        //=====Dados do novo usuário=====
        const newUser = {
            name: 'John Doe',
            email: uniqueEmail, // <-- Agora o e-mail será diferente a cada teste!
            password: 'StrongPassword123'
        };
        //=====Supertest=====
        const response = await request(app)
            .post('/api/users')
            .send(newUser);
        //=====Jest=====
        // Se o teste falhar com um status 400, imprima o corpo da resposta para depuração.
        if (response.status === 400) {
            console.error('Erro 400 ao criar usuário:', response.body);
        }

        expect(response.status).toBe(201);
    });
});