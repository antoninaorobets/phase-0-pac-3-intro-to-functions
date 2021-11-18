// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!")
}

sayHello()

function doSomething(thing) {
    console.log(thing)
}

doSomething("anything")


function add(x, y) {
    return x + y;
  }
  
console.log(add(1, 2));

let a = add(1, 2);
console.log(a);


function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }


  console.log(say("Hello", "Sofia"));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));
  