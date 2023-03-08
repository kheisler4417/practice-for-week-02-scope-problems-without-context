/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/

// Your code here
const reverseStr = str => {
  return str.split('').reverse().join('');
}

// The reverseStr function takes a string str and returns a new string with
// the characters in reverse order.

// To accomplish this, we first use the split method to convert the string
// into an array of characters, then we use the reverse method to reverse
// the order of the elements in the array, and finally, we use the join
// method to convert the reversed array back into a string.

// For example, when you call reverseStr("hello"), it returns the string
// "olleh", which is the reversed version of the original string.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverseStr;
} catch (e) {
  return null;
}
