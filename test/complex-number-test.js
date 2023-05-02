const {it, describe} = require("node:test");
const {strictEqual} = require("assert");
const {getReal, getImg} = require("../src/complex-number.js");

console.log(getReal);

describe("get the real part", function() {  
  it("should return 2", function() {
    strictEqual(getReal({real: 2, img: 3}), 2);
  });

  it("should return 4", function() {
    strictEqual(getReal({real: 4, img: 1}), 4);
  });

  it("should return 20", function() {
    strictEqual(getReal({real: 20, img: 4}), 20);
  });
});

describe("get the imiginary part", function() {  
  it("should return 3", function() {
    strictEqual(getImg({real: 2, img: 3}), 3);
  });

  it("should return 1", function() {
    strictEqual(getImg({real: 4, img: 1}), 1);
  });

  it("should return 10", function() {
    strictEqual(getImg({real: 20, img: 10}), 10);
  });
});

