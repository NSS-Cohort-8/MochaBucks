/* global describe, it */
/* jshint expr: true */

'use strict';

var expect      = require('chai').expect,
    Constructor = require(process.cwd() + '/lib/Constructor');

describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Constructor', function () {
  describe('init', function () {
    it('should have public variables', function () {
      var constructed = new Constructor();
      expect(constructed.publicVariable).to.equal('foo');
    });
    it('should accept an argument', function () {
      var barConstructed = new Constructor('bar'),
          bazConstructed = new Constructor('baz');

      expect(barConstructed.publicVariable).to.equal('bar');
      expect(bazConstructed.publicVariable).to.equal('baz');
    });
  });
});
