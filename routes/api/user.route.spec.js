const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../index');

const should = chai.should();
chai.use(chaiHttp);

describe('User', () => {

    let newUser = {};

    it('should not create a new user: undefined email', done => {
        
        chai.request(server)
            .post('/api/users')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(400);
                // res.should.have.property('success').eql(false);
                // res.should.have.property('message');
            });
    });

    it('should not create a new user: undefined password', done => {

        newUser.email = "test@test.lk";

        chai.request(server)
            .post('/api/users')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(400);
                // res.should.have.property('success').eql(false);
                // res.should.have.property('message');
            });
    });

    it('should create a new user', done => {

        newUser.password = "pass123";

        chai.request(server)
            .post('/api/users')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.property('email').eql('test@test.lk');
                res.should.have.property('_id');
                res.should.have.property('token');
            });
    });
});

