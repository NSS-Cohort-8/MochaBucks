'use strict';

function Constructor(arg) {
  this.publicVariable = arg || 'foo';
}

Constructor.prototype.publicMethod = function () {
  return 'Hello World';
};

module.exports = Constructor;
