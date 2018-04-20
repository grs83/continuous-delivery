const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');
const serverTest = require('../server-test');

describe('Code Test', () => {
  const app = serverTest();
  let server;

  before(done => {
    server = app.listen(4000, () => {
      console.log('Server started on 4k!');
      done();
    });
  });

  after(done => {
    server.close(() => {
      console.log('Server Closed');
      done();
    });
  });

  describe('Server test verification', () => {
    it('Responds to a local "/" get request with git repo details', done => {
      request('http://localhost:4000', (err, response, body) => {
        const parsedBody = JSON.parse(body);
        expect(err).equal(null);
        expect(response.statusCode).equal(200);
        expect(parsedBody).include({
          name: 'continuous-delivery',
          description: 'A practice repository for testing and deployment.'
        });
        done();
      });
    });
  });
});
