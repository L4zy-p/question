const oddInt = (arr) => {
  let arrSize = arr.length;
  for (let i = 0; i < arrSize; i++) {
    let count = 0;

    for (let j = 0; j < arrSize; j++) {
      if (arr[i] == arr[j]) count++;
    }
    if (count % 2 != 0) return arr[i];
  }
  return -1;
};

// function getOddOccurrence(ar) {
//   let arrSize = ar.length;
//   let res = 0;

//   for (let i = 0; i < arrSize; i++) {
//     console.log("res", res,  res ^ ar[i], ar[i])
//     res = res ^ ar[i];
//   }

//   return res;
// }

console.log(oddInt([2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2]));

module.exports = {
    oddInt,
};
