const {it, describe} = require("node:test");
const {strictEqual, deepStrictEqual } = require("assert");
const {getReal, getImaginary, add, display} = require("../src/complex-number.js");

describe("get the real part", function() {  
  it("should return 2", function() {
    strictEqual(getReal({real: 2, imaginary: 3}), 2);
  });

  it("should return 4", function() {
    strictEqual(getReal({real: 4, imaginary: 1}), 4);
  });

  it("should return 20", function() {
    strictEqual(getReal({real: 20, imaginary: 4}), 20);
  });
});

describe("get the imiginary part", function() {  
  it("should return 3", function() {
    strictEqual(getImaginary({real: 2, imaginary: 3}), 3);
  });

  it("should return 1", function() {
    strictEqual(getImaginary({real: 4, imaginary: 1}), 1);
  });

  it("should return 10", function() {
    strictEqual(getImaginary({real: 20, imaginary: 10}), 10);
  });
});

describe("sum of complex number.", function() {  
  it("should contain all +ve number.", function() {
    deepStrictEqual(add({real: 2, imaginary: 1}, {real: 3, imaginary: 4}), {real: 5, imaginary: 5});
  });

  it("should contain all -ve number.", function() {
    deepStrictEqual(add({real:-2 , imaginary: -3}, {real: -3, imaginary: -4}), {real: -5, imaginary: -7});
  });

  it("should contain both +ve and -ve number.", function() {
    deepStrictEqual(add({real:2 , imaginary: -3}, {real: -3, imaginary: 4}), {real: -1, imaginary: 1});
  });

});

display({real: 1,imaginary: 2})

