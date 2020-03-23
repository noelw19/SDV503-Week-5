for (let i = 10; i > -1; i--) 
console.log(i);


for (let i = 0; i < 11; i++) 
console.log(i);

//ES6

for(let i = 0;;i++) {
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};

//multiple statements - make sure its a "legal statement"

let counter = 0;
function inc() {counter++ }for (let i = 0; i < 10; i++, inc());
console.log(counter);

//increment

let counter1 = 0;
for(let i = 0; i < 10; i++)
counter1++;counter1;

//for loops and let scope

for (var i = 0; i < 10; i++) {
    let x = i;
    console.log(x);
    }


//nested loops

for(let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(y, x);
        
//3 dimentional version of above

for(let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        for (let z = 0; z < 2; z++)
        console.log(y, x, z);

//Loop length

// the condition statement will usually check if the counter has reached a limit.

for ( let i = 0; i < 3; i++) console.log("loop.");

// you can add {} brackets if you need to execute multiple statements

for ( let i = 0; i < 3; i++) { let loop = "loop."; 
console.log(loop);
}
// the console will output the same as the previous example.

//skipping steps - you can skip an iteration by using the continue keyword.
for ( let i = 0; i < 3; i++) { if (i == 1) continue;
console.log(i);
}

//example
for ( let wa = 0; wa < 10; wa++) { if (wa == 5) continue;
console.log(wa);
}

//Breaking Early

//you can break out of a for loop by using the break keyword:

for ( let i = 0;; i++) {console.log("loop"); break;
};

//Breaking to a label

// this example produces 11 when breaking to mark
let c = 0;
mark: for( let i = 0; i < 5 ; i++){
    console.log(i);
    inner: for (let j = 0; j < 5; j++){
        console.log(`j= ${j}`);
        c++; if ( i == 2) break mark;
    }   
}

console.log(`c= ${c++}`);
        


//this example produces 21 when breaking to inner:

let d = 0;
mark: for( let i = 0; i < 5; i++){

    inner: for (let j = 0; j < 5; j++){
        d++; if ( i == 2) break inner;
    }
    console.log(d);
}

// break with non for loop

block: {
    console.log("before");
        break block;
        console.log("after");
} 

//for ... of loops and generators

/*generator executes a yield statement in a asynchronous way 
but it will execute only one next yield statement everytime the function
is called.*/

//generator function

function* generator() {
    yield 1;
    yield 2;
    yield 3;
} for (let value of generator())
console.log(value);

//example

function* generator1() {
    yield "one";
    yield "small";
    yield "step";
} for (let result of generator1())
console.log(result);

//for...of loops and strings

let string = 'text'; for (let val of string)
console.log(val);

//for...of loops and arrays
let array = [0, 1, 2];
for(let value of array)
console.log(value);

//for...of loops and objects
/*
let object = {a:1, b:2, c:3}; 
for (let value of object)
console.log(value);
*/
//as shown an on=bject is not iterable
/*as a remedy you can first convert an object to an iterable using
some of the built-in object mthods: .keys(), .values(), .entries() all converts objects into iterable */


    
    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
      };
      
      console.log(Object.keys(object1));

      const object2 = {
        a: 'somestring',
        b: 42,
        c: false
      };
      
      console.log(Object.values(object2));

    /*  const object1 = {
        a: 'somestring',
        b: 42
      };
      
      for (let [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }*/


// object.keys() - 
//      returns an array of the objects property names in the same order that they arewithin the object.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1)); //this code would return array = ["a", "b", "c"]

  //objects.values() - 
  //        returns an array of the objects property values in the same order that they are within the onject.

  const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

  //objects.entries() - 
  //        returns an array of the objects string keyed properties [key, value] in thier respective pairs.
  //        but the order in which their output is not garanteed. 

  //if an order is required: Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0])); 
  //the syntax shown can be used to sort that order.

  const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed


