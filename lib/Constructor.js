/* jshint mocha: true, expr: true */

'use strict';

var _privateVariable = 'foo',
    _privateBoolean = true;

function Constructor(arg) {
  this.publicVariable = arg || _privateVariable;
  this.publicBoolean = true;
}

Constructor.prototype.publicMethod = _privateMethod;

Constructor.prototype.checkPrivateBoolean = function () {
  return _privateBoolean;
};

Constructor.prototype.flipPublicBoolean = function () {
  this.publicBoolean = !this.publicBoolean;
  return this.publicBoolean;
};

Constructor.prototype.flipPrivateBoolean = function () {
  _privateBoolean = !_privateBoolean;
  return _privateBoolean;
};

function _privateMethod() {
  return 'Hello World';
}



module.exports = Constructor;
