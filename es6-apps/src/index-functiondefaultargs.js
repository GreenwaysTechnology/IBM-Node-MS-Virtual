function sayHello() {
      console.log('Hello!');
}
sayHello();

//function parameters and args
//default Args
function add(a = 1, b = 1) {
      return a + b;
}
console.log(add(10, 10));
console.log(add());
console.log(add(undefined, 90));