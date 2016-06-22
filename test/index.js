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
      config.should.have.property('port');
      expect(config.port).to.be.above(0);
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
      config.should.have.property('port');
      expect(config.port).to.be.above(0);
      done();
    });

    it('log config', function(done) {
      config.should.have.property('log');
      done();
    });
  });

});
