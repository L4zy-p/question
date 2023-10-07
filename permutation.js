const findeMax = (text, first, l, h) => {
  let maxIndex = l;

  for (let i = l + 1; i <= h; i++) {
    if (text[i] > first && text[i] < text[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
};

const permutation = (text) => {
  let textSize = text.length;
  text = text.split("");

  text.sort();

  let isComplete = false;
  let result = [];
  while (!isComplete) {
    result.push(text.join(""));

    let i;
    for (i = textSize - 2; i >= 0; --i) {
      if (text[i] < text[i + 1]) {
        break;
      }
    }
    if (i == -1) {
      isComplete = true;
    } else {
      let maxIndex = findeMax(text, text[i], i + 1, textSize - 1);

      let temp = text[i];
      text[i] = text[maxIndex];
      text[maxIndex] = temp;

      text = text.slice(0, i + 1).concat(text.slice(i + 1).sort());
    }
  }
  return result;
};

console.log(permutation("abc"));

module.exports = {
  permutation,
};
