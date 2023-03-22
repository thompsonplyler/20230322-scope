// block scope
{
  let a = "foo";
}
// what happens when we change 'let' to 'var?'

console.log(a);
// this is not a JS issued function

// our globalVariable; this should be available
// to every aspect of our code
const globalVariable = true;

function init() {
  // do we expect this console.log to show us?
  console.log("global Variable found: ", globalVariable);

  const initVariable = true;
  console.log("initVariable found: ", initVariable);
  varWarning(); // called one thing
}

function varWarning() {
  const animals = ["dog", "cat", "bat", "rat"];

  /* 
  
  Here, we look for the initVariable declared inside init()
  Do we expect this to return an error? 
  Why? 

  This function is declared on line 24 ("function varWarning")
  and ends on line 73.
  Where could you relocate this code so that
  it does have access to the initVariable?

  */
  console.log(`Found initVariable?`);
  // What do we expect to be logged?
  console.log(initVariable);

  arrays = [0, 1, 2, 3];
  for (var i = 0; i < animals.length; i++) {
    //console.log("do a thing")
    console.log("My animal is a", animals[i]);

    // The next line calls a function from line 60.
    // You may notice how cumbersome it is to scroll
    // to find the function
    // Should we expect to find the beast variable?

    console.log(`It is ${isAwesome(animals[i]) ? "awesome" : "lame"}`);
    console.log(`Looking for 'beast' variable: 
    ${beast ? "not found" : "found the variable!"}
    `);
    // how could we move the isAwesome() function
    // if we wanted to see the beast variable.
  }

  // This returns the value i successfully.
  // Why?
  // Why is this bad?
  console.log(i);

  function isAwesome(beast) {
    // let beast = 'whatever has been passed in'
    return beast === "dog" ? true : false;
    // beast disappears from memory
  }

  return;
}

init();
