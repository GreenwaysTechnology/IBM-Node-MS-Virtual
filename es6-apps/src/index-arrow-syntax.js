//arrow functions

/* let hai = function () {
      console.log('Hai');
}; */
//arrow function : ES 6 version of function expression.
/**
 * Arrow function has so many flav
 */

//basic function
let hai = () => {
      console.log('Hai');
};

hai();
//with args : two parameters, with default value
let add = (a = 1, b = 1) => {
      let result = a + b;
      console.log(`The add result is ${result}`);
};
add(10, 10)
//with args : single parameter without default value : bracket() can be dropped
let welcome = name => {
      console.log(`The name is ${name}`);
};
welcome('Subramanian');

//if function body has only one line : drop {}
let welcome1 = name => console.log(`The name is ${name}`);
welcome1('Subramanian');
//return values
/* let substract = (a = 1, b = 1) => {
      return a - b;
}; */
//if function has only return statement, no more body ; you can drop {}, return statement.
let substract = (a = 1, b = 1) => a - b;
console.log(substract(10, 2));