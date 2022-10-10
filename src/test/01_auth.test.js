const request = require('supertest');
const app = require('../../app');

describe('[AUTH] test de /auth/login', () => {
  test('should be 404', async () => {
    const response = await request(app)
      .post('/v1/api/auth/login')
      .send({
        email: 'adrian@gmail.com',
        password: 'Adrian.1426'
      });

    expect(response.statusCode).toEqual(404);
  });

  test('should be 200 - user register', async () => {
    const response = await request(app)
      .post('/v1/api/auth/register')
      .send({
        email: 'adrian@gmail.com',
        password: 'Adrian.1426',
        age: 23,
        name: 'Adrian'
      });

    expect(response.statusCode).toEqual(200);
  });
}); 