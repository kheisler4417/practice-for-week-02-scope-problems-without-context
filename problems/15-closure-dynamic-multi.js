/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25


***********************************************************************/

function dynamicMultiply(num) {
  return function (x) {
    return num * x;
  }
}

// The dynamicMultiply function takes a num argument and returns a new function
// that takes an x argument and multiplies it by num.When you call
// dynamicMultiply(2), it returns a new function that multiplies its argument
// by 2. When you call doubler(5), it multiplies 5 by 2 and returns 10.

// Similarly, calling dynamicMultiply(3) returns a new function that multiplies
// its argument by 3, and calling tripler(5) multiplies 5 by 3 and returns 15.
// The same goes for dynamicMultiply(5) and multiplyByFive(5).

// This works because each time you call dynamicMultiply, it creates a new closure
// that "remembers" the num value from its original call.The returned function,
// therefore, has access to that value and can use it in its own calculations.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicMultiply;
} catch (e) {
  return null;
}
