const {it, describe} = require("node:test");
const {strictEqual, deepStrictEqual } = require("assert");
const {complexNumber, display} = require("../src/complex-number.js");

describe("complex number", function() {   
  describe("get the real part", function() {  
    it("should return real part, which is 2.", function() {
      const a = complexNumber(2, 3);
      strictEqual(a.real(), 2);
    });

    it("should return real part, which is -4.", function() {
      const b = complexNumber(-4, 1);
      strictEqual(b.real(), -4);
    });
  });

  describe("get the imiginary part", function() {  
    it("should return imaginary part, which is 1.", function() {
      const a = complexNumber(-4, 1);
      strictEqual(a.imaginary(), 1);
    });

    it("should return imaginary part, which is -2.", function() {
      const b = complexNumber(1, -2);
      strictEqual(b.imaginary(), -2);
    });
  });

  describe("sum of complex number.", function() {  
    it("should return complex number, in which real and imaginary are positive.", function() {
      const a = complexNumber(1, 2);
      const b = complexNumber(3, 4);

      const c = a.add(b);

      strictEqual(c.real(), 4);
      strictEqual(c.imaginary(), 6);
    });

    it("should return complex number, in which real part are negative.", function() {
      const a = complexNumber(1, 2);
      const b = complexNumber(-4, 4);

      const c = a.add(b);

      strictEqual(c.real(), -3);
      strictEqual(c.imaginary(), 6);
    });

    it("should return complex number, in which imaginary part are negative.", function() {
      const a = complexNumber(1, 2);
      const b = complexNumber(4, -4);

      const c = a.add(b);

      strictEqual(c.real(), 5);
      strictEqual(c.imaginary(), -2);
    });

    it("should return complex number, in which real and imaginary are negative.", function() {
      const a = complexNumber(1, -5);
      const b = complexNumber(-4, 1);

      const c = a.add(b);

      strictEqual(c.real(), -3);
      strictEqual(c.imaginary(), -4);
    });
  });

  describe("multiplication of complex number.", function() {  
    it("should multiply complex number, in which real and imaginary parts are positive.", function() {
      const a = complexNumber(1, 2);
      const b = complexNumber(3, 4);

      const c = a.multiply(b); 

      strictEqual(c.real(), -5);
      strictEqual(c.imaginary(), 10);
    });

    it("should multiply complex number, in which real and imaginary are both +ve and -ve.", function() {
      const a = complexNumber(-1, 2);
      const b = complexNumber(3, -4);

      const c = a.multiply(b); 

      strictEqual(c.real(), 5);
      strictEqual(c.imaginary(), 10);
    });
  });

})
