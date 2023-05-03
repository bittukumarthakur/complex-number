const complexNumber = function(realNumber, imaginaryNumber) {
  const real = function() {
    return realNumber;
  };

  const imaginary = function() {
    return imaginaryNumber;
  };

  const add = function(addend) {
    const real = realNumber + addend.real();
    const imaginary = imaginaryNumber + addend.imaginary();

    return complexNumber(real, imaginary);
  };

  const multiply = function(multiplicand) {
    const real1 = realNumber;
    const imaginary1 = imaginaryNumber;
    const real2 = multiplicand.real();
    const imaginary2 = multiplicand.imaginary();

    const real = (real1 * real2) + (imaginary1 * imaginary2 * -1);
    const imaginary = (real1 * imaginary2) + (imaginary1 * real2);

    return complexNumber(real, imaginary);
  };

  return {real, imaginary, add, multiply}
};

const display = function(complexNumber) {
  const real = complexNumber.real();
  const imaginary = complexNumber.imaginary();
  const operator = imaginary < 0 ? "-" : "+";

  console.log(`${real} ${operator} ${Math.abs(imaginary)}i`);
};

exports.display = display;
exports.complexNumber = complexNumber;
