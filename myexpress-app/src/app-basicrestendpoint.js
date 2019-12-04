const express = require('express');

const port = 3000;
//Create Application Object
const app = express();

//REST End Points
//http://localhost:3000/api/list

app.get('/api/list', function (req, res) {
      res.end('api list get is called');
})

app.post('/api/list', function (req, res) {
      res.end('api list post is called');
})

app.put('/api/list', function (req, res) {
      res.end('api list put is called');
})
app.delete('/api/list', function (req, res) {
      res.end('api list delete is called');
})


//start server 
app.listen(port, function () {
      console.log(`Express Server is Ready at ${port}`);
});