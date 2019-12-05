const express = require('express');
const todosModule = require('./todos/todosmodule');
const usersModule = require('./users/usersmodule');
const bodyParser = require('body-parser');

const port = 3000;
//Create Application Object
const app = express();

//middleware : custom
//middleware syntax similar to request handler but it takes extra parameter
// next
//global middlewares , middle for any url,any method
app.use(function (req, res, next) {
      //middleware logic
      console.info('IBM digital api platform started...');
      next();
});

app.use(function (req, res, next) {
      //middleware logic
      console.info('This Platform is used to automate digital apis...');
      next();
});
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
      extended: false
}))


//Request will be passed to app
//configure submodules with app
app.use('/api/todos', todosModule);
app.use('/api/users', usersModule);


//home page
app.get('/', function (req, res) {
      res.end('<h1>IBM digitial api platform </h1>');
});


//start server 
app.listen(port, function () {
      console.log(`Express Server is Ready at ${port}`);
});

app.on('request', function (req, res) {
      console.log(`Server is listening ${req.url}`)
});