/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

const plannedIntersect = firstArr => {
  return secondArr => {
    return firstArr.filter(x => secondArr.includes(x));
  }
}

// The plannedIntersect function takes an array firstArr and returns a new function
// that takes another array secondArr.The returned function uses the filter method
// to create a new array containing only the elements that are common to both firstArr
// and secondArr.

// To accomplish this, we use the includes method to check if each element in firstArr
// is also present in secondArr.If it is, we include it in the new array.

// For example, when you call plannedIntersect(["a", "b", "c"]), it returns a function
//   that you can call with another array to find the elements that are common to both.
// When you call abc(["b", "d", "c"]), it returns the array['b', 'c'], which are the
// elements that are common to both["a", "b", "c"] and["b", "d", "c"].

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
