const fs = require('fs');

const filePath = './src/info.txt';
const config = {
      encoding: 'UTF-8'
}

console.log('start');
const data = fs.readFileSync(filePath, config);
console.log(data);
console.log('end')