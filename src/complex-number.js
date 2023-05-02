// getReal({real: 2, img: 3}) ==> 3;
// getReal([2,3i]) ==> 3;

const getReal = function(complexNumber) {
  return complexNumber.real;
};

const getImg = function(complexNumber) {
  return complexNumber.img;
};

const add = function(firstNumber, secondNumber) {
  const real = firstNumber.real + secondNumber.real;
  const img = firstNumber.img + secondNumber.img;
  return {real, img};
}

const display = function(complexNumber) {
  console.log(`${complexNumber.real} + ${complexNumber.img}i`);
};

exports.getReal = getReal;
exports.getImg = getImg;
exports.add = add;
exports.display = display;

