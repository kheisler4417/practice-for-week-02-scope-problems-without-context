/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/


function dynamicDivide(divisor) {
  return function (number) {
    return number / divisor;
  }
}

// The dynamicDivide function takes a divisor argument and returns a new function
// that takes a number argument and divides it by the divisor.When you call
// dynamicDivide(2), it returns a new function that divides its argument by 2.
// When you call halfer(20), it divides 20 by 2 and returns 10.

// Similarly, calling dynamicDivide(3) returns a new function that divides its
// argument by 3, and calling divideByThree(30) divides 30 by 3 and returns 10.
// The same goes for dynamicDivide(5) and divideByFive(50).

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicDivide;
} catch (e) {
  return null;
}
