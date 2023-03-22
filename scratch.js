var customerName = "bob";

console.log(upperCaseCustomerName());
console.log(setbestCustomer());
console.log(overwriteBestCustomer());

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setbestCustomer() {
  var bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

const leastFavoriteCustomer = "Michael";
function changeLeastFavoriteCustomer() {
  return (leastFavoriteCustomer = "Jim");
}
console.log(changeLeastFavoriteCustomer());
