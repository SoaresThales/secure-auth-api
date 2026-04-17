const request = require('supertest');
const app = require('../../../shared/infra/http/app');

describe('Auth Domain: Login Flow', () => {
  const testUser = {
    name: 'Thales Soares',
    email: 'thales.auth@test.com',
    password: 'securepassword123'
  };

  // Antes de testar o login, preciso garantir que o usuário existe no banco
  beforeAll(async () => {
    await request(app).post('/api/users').send(testUser);
  });

  it('Deve retornar status 200 e um Token JWT para credenciais válidas', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(typeof response.body.token).toBe('string');
  });

  it('Deve retornar status 401 (Unauthorized) para senha incorreta', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: 'wrongpassword'
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error');
  });

  it('Deve retornar status 404 (Not Found) para e-mail não cadastrado', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'ghost@test.com',
        password: 'anypassword'
      });

    expect(response.status).toBe(404);
  });
});