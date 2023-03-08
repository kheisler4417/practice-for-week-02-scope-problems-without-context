/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.

Example 1:
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]


***********************************************************************/

function coupon(discount) {
  return function (prices) {
    return prices.map(price => price * (1 - discount));
  }
}

// The coupon function takes a discount argument and returns a new function that
// takes an array of prices.The returned function applies the discount to each
// element in the prices array using the map method and returns the new array
// with the discounted prices.

// For example, when you call coupon(0.1), it returns a new function that applies
// a 10 % discount to each element in an array of prices.When you call
// tenPercent([10, 20, 30]), it applies the discount to each element and returns[9, 18, 27].

// Similarly, when you call coupon(0.2), it returns a new function that applies
// a 20 % discount to each element in an array of prices.When you call
// twentyPercent([10, 20, 30]), it applies the discount to each element and
// returns[8, 16, 24].

// This works because each time you call coupon, it creates a new closure that
// "remembers" the discount value from its original call.The returned function,
// therefore, has access to that value and can use it in its own calculations.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = coupon;
} catch (e) {
  return null;
}
