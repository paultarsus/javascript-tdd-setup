'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/library.js');

describe("input the number", function() {
  it("should give the sum of the primes", function() {
    assert(
      lib.sumofprimes((5)==10)
    );
  });
  it("should return false for characters", function() {
    assert(
      lib.sumofprimes(("$%")==false)
    );
  });
   });
});