function moveZerosToEnd(nums) {
  let nonZeros = [];
  let zeros = [];

  // Separate non-zero and zero elements
  for (let num of nums) {
    if (num !== 0) {
      nonZeros.push(num);
    } else {
      zeros.push(num);
    }
  }

  // Combine non-zero elements followed by zeros
  return nonZeros.concat(zeros);
}

// Test the function
let nums = [0, 1, 0, 3, 12];
let result = moveZerosToEnd(nums);
console.log(result);
