const smile = (arr) => {
  let faceRegex = /[;:][~-]?[)D]/;
  let incr = 0;
  for (face of arr) {
    if (faceRegex.test(face)) {
      incr++;
    }
  }
  return incr;
};

console.log(smile([';]', ':[', ';*', ':$', ';-D']))

module.exports = {
    smile,
};
