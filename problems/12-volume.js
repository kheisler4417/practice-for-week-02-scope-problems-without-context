/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/
// The first code block suggested by ChatGPT fails and is found below
// The returns are:
// [Running] node "/home/kheisler/aa-projects/practice-for-week-02-scope-problems-without-context/problems/12-volume.js"
// 20
// 20
// [Done] exited with code = 0 in 0.044 seconds

// function recVolume(height) {
//   let length, width;
//   let volume = height;
//   return function (num) {
//     if (length === undefined) {
//       length = num;
//       volume *= length;
//       return function (num) {
//         if (width === undefined) {
//           width = num;
//           volume *= width;
//           return volume;
//         }
//         return volume;
//       };
//     }
//     return volume;
//   };
// }
/*****************************************************/
// The second suggestion by ChatGPT also fails and is found below:

// const recVolume = height => {
//   let length, width, volume = height;
//   return num => length === undefined
//     ? (length = num, volume *= length, num2 => width === undefined ? (width = num2, volume *= width, volume) : volume)
//     : volume;
// }

/**********************************************************/

function recVolume(height) {
  let width, length, volume;

  function calculateVolume() {
    return height * width * length;
  }

  return function (num) {
    if (width === undefined) {
      width = num;
    } else if (length === undefined) {
      length = num;
      volume = calculateVolume();
    }
    return volume;
  };
}

// The recVolume function returns a function that captures the height parameter
// in a closure.The returned function takes a single argument num, which
// represents either the width or length of the rectangle.

// The returned function checks if width has been set yet.If not, it sets
// width to the value of num.If width has already been set, it checks if
// length has been set yet.If not, it sets length to the value of num and
// calculates the volume of the rectangle using height, width, and length.
// Once the volume has been calculated, subsequent calls to the returned
// function will always return the same volume.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = recVolume;
} catch (e) {
  return null;
}
