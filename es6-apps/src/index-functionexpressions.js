//funciton declaration
function sayHello() {
      return 'hello';
}
//function invocation
console.log(sayHello());

//function declaration : literal pattern
//hai is just variable , which points function as value
/* let hai = function sayHai() {
      console.log('Hai');
}; */
//Anonmous function
let hai = function () {
      console.log('Hai');
};
//invoke
//sayHai();
hai();

let add = function (a=1, b=1) {
      return a + b;
};
console.log(add(10, 10));