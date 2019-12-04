const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'info.txt');
const config = {
      encoding: 'UTF-8'
}
//read stream
const inputStream = fs.createReadStream(fileName, config);

//register listeners for data,error...

let data = '';
inputStream.on('data', function (chunk) {
      console.log(`Received ${chunk.length} bytes of data.`);
      data += chunk;
});

//end event
inputStream.on('end', function () {
      console.log('There will be no more data to read!');
      console.log(data);
})

//error event: for error handling
inputStream.on('error', function (err) {
      console.log(`Some thing went wrong! ${err}`)
});