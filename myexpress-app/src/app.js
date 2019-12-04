const express = require('express');
const todosModule = require('./todos/todosmodule');
const usersModule = require('./users/usersmodule');

const port = 3000;
//Create Application Object
const app = express();
//Request will be passed to app
//configure submodules with app
app.use('/api/todos', todosModule);
app.use('/api/users', usersModule);


//start server 
app.listen(port, function () {
      console.log(`Express Server is Ready at ${port}`);
});