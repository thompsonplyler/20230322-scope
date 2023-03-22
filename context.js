const name = "Thompson";

// will this create an error? Why or why not?
greet();

function greet() {
  console.log("Nothing to see here!");

  return "Hello, World";
}

// will this create an error? Why or why not?
es6Greet();

const es6Greet = () => {
  console.log("Nothing to see here!");
  // insert breakpoint
  return "Hello, World";
};

// What is available in the global scope here?
greet();
