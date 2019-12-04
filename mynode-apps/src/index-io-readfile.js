//fs.js : non block io
const fs = require('fs');

//read file
const filePath = './src/info.txt';
const config = {
      encoding: 'UTF-8'
}
console.log('start')
//readFile(path,config,handler/callback)
//readFile---stack---|libuv----->OS Kernal - starts spining a thread to read file.
fs.readFile(filePath, config, function (err, data) {
      if (err) throw err;
      console.log(data);
});
console.log('end')