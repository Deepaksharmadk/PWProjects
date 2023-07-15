function firstUniqueChar(s) {
  const charCount = {};

  // Count occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1;
}

// Test the function
let s = "aabb";
let result = firstUniqueChar(s);
console.log(result);
