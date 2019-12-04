const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'config.json');
const config = {
      encoding: 'utf8',
      flag: 'w'
};
const data = [{
      name: 'IBM digital',
      version: '1.1.'
}];

const outputStream = fs.createWriteStream(fileName, config);
outputStream.write(JSON.stringify(data));