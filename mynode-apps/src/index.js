const http = require('http');
const USERS = require('./mock-data/users-mock');

const port = 3000;

const requestHandler = (request, response) => {
      //setting response headers
      response.setHeader('Content-Type', 'application/json');
      //request and response processing
      response.write(JSON.stringify(USERS));
      response.end() //close  stream
};
const server = http.createServer(requestHandler);


//start the server
server.listen(port, () => {
      console.log(`Server is Up at ${port}! `);
});