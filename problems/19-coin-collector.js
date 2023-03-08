/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.

Example 1:
  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]

Example 2:
  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

Example 3:
  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]

***********************************************************************/

function coinCollector(numCoins) {
  const coins = [];

  return function collectCoin(coin) {
    coins.push(coin);

    if (coins.length === numCoins) {
      return coins;
    }

    return collectCoin;
  }
}

// The coinCollector function takes a single parameter numCoins which represents the
// number of coins to be collected.Inside the coinCollector function, we create an
// empty array coins that will hold the collected coins.

// We then return a new function named collectCoin that takes a single parameter
// coin. Inside this function, we push the coin parameter to the coins array.We
// then check if the length of the coins array is equal to numCoins. If it is, we
// return the coins array. Otherwise, we return the collectCoin function to continue
// collecting coins.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = coinCollector;
} catch (e) {
  return null;
}
