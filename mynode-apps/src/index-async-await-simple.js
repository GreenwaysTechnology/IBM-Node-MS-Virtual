//async and await

async function sayHello() {
      //return Promise.resolve("Hello");
      return "Hello";
}
//this function returns promise :
//by default async function return promise
sayHello().then(res => console.log(res));

async function getCounter() {
      return Promise.resolve(1000);
}
getCounter().then(res => console.log(res));