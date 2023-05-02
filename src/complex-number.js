
const getReal = function(complexNumber) {
  return complexNumber.real;
};

const getImg = function(complexNumber) {
  return complexNumber.img;
};


// getReal({real: 2, img: 3}) ==> 3;
// getReal([2,3i]) ==> 3;


exports.getReal = getReal;
exports.getImg = getImg;

