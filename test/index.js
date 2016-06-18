var expect = require('chai').expect;
var Config = require('../lib/config');
var config;

describe('config module checking', function() {

  describe('default server config', function() {
    before(function(done) {
      config = new Config();
      done();
    });
    after(function () {
      config = undefined;
    });

    it('ports config', function(done) {
      config.should.have.property('PORTS');
      config.PORTS.should.have.property('login');
      expect(config.PORTS.login).to.be.above(0);
      done();
    });

    it('login config', function(done) {
      config.should.have.property('login');
      config.login.should.have.property('TOKEN');
      config.login.TOKEN.should.have.property('secret');
      config.login.TOKEN.should.have.property('expire');
      expect(config.login.TOKEN.expire).to.be.above(0);
      done();
    });

    it('log config', function(done) {
      config.should.have.property('log');
      done();
    });
  });

  describe('test server config', function() {
    before(function(done) {
      config = new Config('test');
      done();
    });
    after(function () {
      config = undefined;
    });

    it('ports config', function(done) {
      config.should.have.property('PORTS');
      config.PORTS.should.have.property('login');
      expect(config.PORTS.login).to.be.above(0);
      done();
    });

    it('login config', function(done) {
      config.should.have.property('login');
      config.login.should.have.property('TOKEN');
      config.login.TOKEN.should.have.property('secret');
      config.login.TOKEN.should.have.property('expire');
      expect(config.login.TOKEN.expire).to.be.above(0);
      done();
    });

    it('log config', function(done) {
      config.should.have.property('log');
      done();
    });
  });

});
