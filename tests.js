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
    it("should return false for empty string", function() {
    assert(
      lib.sumofprimes((" ")==false)
    );
    it("should return false for negative numbers", function() {
    assert(
      lib.sumofprimes((-12)==false)
    );
    it("should return false for decimal numbers", function() {
    assert(
      lib.sumofprimes((17.4)==false)
    );
    it("should return false if number less than 2", function() {
    assert(
      lib.sumofprimes((1)==false)
    );
});
it("should return false if a string is supplied", function() {
    assert(
      lib.sumofprimes(("abd")==false)
    );
    it("should return false if zero is supplied ", function() {
    assert(
      lib.sumofprimes((0)==false)
    );
});