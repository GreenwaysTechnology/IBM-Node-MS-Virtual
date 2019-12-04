const http = require('http');

const port = 3000;

//Request Handler /callback function called when ever new request comes to node server.
const requestHandler = function (request, response) {
      //here we handle client request and response : io
      response.write('<h1>Hello  Node Web App!</h1>');
      //close the response stream(outstream)
      response.end();
}
//Create Web Server
const server = http.createServer(requestHandler);

//start the Server / bind socket

server.listen(port, function () {
      console.group(`Node Web Server is listening @ ${port}`);
});