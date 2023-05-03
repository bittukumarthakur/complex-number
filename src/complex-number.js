// getReal({real: 2, imaginary: 3}) ==> 3;

const get = function(complexNumber) {
  const real = function() {
    return complexNumber.real;
  };

  const imaginary = function() {
    return complexNumber.imaginary;
  };

  return {real,imaginary}
};


const getReal = function(complexNumber) {
  return complexNumber.real;
};

const getImaginary = function(complexNumber) {
  return complexNumber.imaginary;
};


const add = function(firstNumber, secondNumber) {
  const a = get(firstNumber);
  const b = get(secondNumber);
  const real = a.real() + b.real();
  const imaginary = a.imaginary() + b.imaginary();

  return {real, imaginary};
};

/*
const add = function(firstNumber, secondNumber) {
  const real = firstNumber.real + secondNumber.real;
  const imaginary = firstNumber.imaginary + firstNumber.imaginary;

  return {real, imaginary};
}
 */

// complex multiplication
// (a + bi) * (c + di)
//a(c + di) + bi(c + di)
// (a * c) + (a * di) + (bi * c) + (bi * di)
// (real1 * real2) + (real1 * imaginary2) + (imaginary1 * real2) + (imaginary1 * imaginary2 * -1)
// real: (real1 * real2) + (imaginary1 * imaginary2 -1)
// imaginary: (real1 * imaginary2) + (imaginary1 * real2);

const multiply = function(firstNumber, secondNumber) {
  const {real: real1, imaginary: imaginary1} = firstNumber;
  const {real: real2, imaginary: imaginary2} = secondNumber;
  const real = (real1 * real2) + (imaginary1 * imaginary2 * -1);
  const imaginary = (real1 * imaginary2) + (imaginary1 * real2);

  return {real, imaginary};
};

const display = function(complexNumber) {
  const {real, imaginary} = complexNumber;
  const operator = imaginary < 0 ? "-" : "+";
  console.log(`${real} ${operator} ${Math.abs(imaginary)}i`);
};

exports.getReal = getReal;
exports.getImaginary = getImaginary;
exports.add = add;
exports.display = display;
exports.multiply = multiply;

