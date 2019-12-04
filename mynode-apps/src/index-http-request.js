const http = require('http');

const port = 3000;

const requestHandler = (request, response) => {
      //setting response headers
      response.setHeader('Content-Type', 'application/json');
      //request and response processing
      let data = ''
      request.on('data', function (chunk) {
            data += chunk;
      });
      request.on('end', function () {
            console.log(data);
            response.write(JSON.stringify({
                  message: 'Data has been submitted'
            }));
            response.end() //close  stream
      });

};
const server = http.createServer(requestHandler);


//start the server
server.listen(port, () => {
      console.log(`Server is Up at ${port}! `);
});