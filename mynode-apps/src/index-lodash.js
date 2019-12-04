const _ = require('lodash');

let array = [1];
let other = _.concat(array, 2, [3], [
      [4]
]);
console.log(other);
// => [1, 2, 3, [4]]

console.log(array);