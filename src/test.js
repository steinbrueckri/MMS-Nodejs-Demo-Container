const app = require('./index');
const should = require('chai').should();
const request = require('supertest');

describe('test.js', () => {

  describe('GET /', () => {
    it('responds with 200', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((e, res) => {
          should.not.exist(e);
          done();
        });
    });
  });

  describe('GET /err', () => {
    it('responds with 500', (done) => {
      request(app)
        .get('/err')
        .expect(500)
        .end((e, res) => {
          should.not.exist(e);
          done();
        });
    });
  });

  describe('GET /ping', () => {
    it('responds with 200', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((e, res) => {
          should.not.exist(e);
          done();
        });
    });
  });

});

after('Exit mocha gracefully after finishing all tests execution', () => {
  // Exit node process
  process.exit()
});
