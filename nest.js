// Problem: Return an object with three keys
// and their appropriate amounts:
/*
totalBeforeTaxes
totalBeforeTipAndTaxes 
totalAfterTipAndTaxes
*/

const meals = [
  { name: "thompson", price: 2.5 },
  { name: "cj", price: 5.0 },
  { name: "oli", price: 2.5 },
  { name: "monica", price: 3.0 },
  { name: "jay", price: 27.0 },
  { name: "tom", price: 0.43 },
];

// can we call the tax variable?
function findTotalTip(array) {
  const tip = 0.15;
  debugger;
  return tip;
  // is there a function in scope that can shortcut this?
  // if not, is there a function out of scope?
}

findTotalTip(meals);

// takes a cost, returns that cost with the tip added
functionValueWithTip = (cost) => {
  tip = tip * cost;
  return tip + cost;
};

// sneak preview of array methods inside!
// this function provides the sum of appropriately
// formatted arrays.

const sumPrice = (array) => {
  // returns an array of all prices in the array
  //
  // MAP ALWAYS RETURNS
  // AN ARRAY WITH A LENGTH EQUAL TO THE
  // LENGTH OF THE ORIGINAL ARRAY
  //

  let prices = array.map((item) => item.price);

  // returns the sum of the price values in the new array, prices
  return prices.reduce((a, b) => a + b, 0);
};
