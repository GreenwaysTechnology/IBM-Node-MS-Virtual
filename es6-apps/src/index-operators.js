//operators
// == , === !=,!==,!,!!

//equal operators

let x = 10;
let y = 10;
if (x == y) {
      console.log('X and Y are equal')
} else {
      console.log('X AND Y not equal')
}
// === type + content
let a = "10"; //string
let b = 10; //number
if (a === b) { // string == number
      console.log('A and B are equal')
} else {
      console.log('A AND B not equal')
}

let token = '1234';
//let isTokenAvailable = !token; //inverter
let isTokenAvailable = !!token; //inverter
console.log(`isTokenAvailable ${isTokenAvailable}`)