/* function increment() {
      console.log('increment function is called!');
      //nested function 
      function count() {
            console.log('counter function')
      }
      //
      count();
} */
/* function increment() {
      console.log('increment function is called!');
      //nested function 
      let count = function () {
            console.log('counter function')
      }; //
      count();
} */

function increment() {
      console.log('increment function is called!');
      //nested function 
      /*  return function count() {
             console.log('counter function')
       } */
      /*  let count = function () {
             console.log('counter function')
       };
       return count; */
      return function () {
            console.log('counter function')
      };
}
/* let counter = increment();
counter(); */
increment()();

//arrow version

let decrement = () => {
      return () => console.log('Decrement');
}
decrement()();