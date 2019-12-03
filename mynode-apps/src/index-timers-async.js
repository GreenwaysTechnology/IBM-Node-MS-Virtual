//Async code with timers

function sayHello() {
      return 'Hello'
}

function sayGoodBye() {
      return 'Good Bye!';
}

function start(handler) {
      //invoke hanlder
      setTimeout(function () {
            handler();
      }, 5000);
}
let sleep = function () {
      console.log('I have slept well!');
};
console.log(sayHello());
start(sleep);
start(function () {
      console.log('I have slept well again!');
});
console.log(sayGoodBye());