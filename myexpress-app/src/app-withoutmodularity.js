const express = require('express');
const TODOS = require('./mock-data/todos');
const USERS = require('./mock-data/users');

const port = 3000;
//Create Application Object
const app = express();

//REST End Points :TODOS

//http://localhost:3000/api/todos/list

app.get('/api/todos/list', function (req, res) {
      res.json(TODOS);
})
//http://localhost:3000/api/todos/:id
//http://localhost:3000/api/todos/2
app.get('/api/todos/:id', function (req, res) {
      //read Request parameter
      const id = parseInt(req.params.id)
      const filteredTo = TODOS.filter(todo => {
            return todo.id === id;
      });
      res.json(filteredTo);
})
//REST END POINT : USERS

//http://localhost:3000/api/users/list

app.get('/api/users/list', function (req, res) {
      res.json(USERS);
})
//http://localhost:3000/api/users/:id
//http://localhost:3000/api/users/2
app.get('/api/users/:id', function (req, res) {
      //read Request parameter
      const id = parseInt(req.params.id)
      const filteredUsers = USERS.filter(user => {
            return user.id === id;
      });
      res.json(filteredUsers);
})

//start server 
app.listen(port, function () {
      console.log(`Express Server is Ready at ${port}`);
});