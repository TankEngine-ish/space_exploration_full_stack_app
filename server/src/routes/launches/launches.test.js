const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/) // regex
        .expect(200);
    });
});

/* 
    supertest is taking the app object I pass it, calls a listen function on it
    and then it allows me to make a request directly to the resulting http server.
*/

describe('Test POST /launch', () => {
    test('It should respond with 200 success', () => {

});

    test('It should catch missing required properties', () => {});
        test('It should catch invalid dates', () => {});
});