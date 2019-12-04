//fs.js : non block io
const fs = require('fs');
const path = require('path');

/* console.log(__dirname)
console.log(__filename) */



//read file
const filePath = path.join(__dirname, 'info.txt')
const config = {
      encoding: 'UTF-8'
}
console.log('start')
fs.readFile(filePath, config, function (err, data) {
      if (err) throw err;
      console.log(data);
});
console.log('end')