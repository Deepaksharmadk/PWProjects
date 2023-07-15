function firstUniqueChar(s) {
  // Create a frequency map to count occurrences of each character
  const charCount = {};
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

  // If no unique character found, return -1
  return -1;
}

// Test the function
let s = "leetcode";
let result = firstUniqueChar(s);
console.log(result);
