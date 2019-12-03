//{name:'Subramanian',city:'Coimbatore',status:true};
/* const info = require('./name');

console.log(`Name ${info.name}`);
console.log(`City ${info.city}`);
console.log(`Status ${info.status}`); */
//object desturcing
const {
      name,
      city,
      status
} = require('./name');

console.log(`Name ${name}`);
console.log(`City ${city}`);
console.log(`Status ${status}`);