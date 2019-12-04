const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'grains.txt');
const config = {
      encoding: 'utf8',
      flag: 'w'
};
const grains = ['wheat', 'rice', 'oats'];

const outputStream = fs.createWriteStream(fileName, config);

while (grains.length) {
      let data = grains.pop() + " ";
      outputStream.write(data);
      console.log("Wrote: %s", data);
}