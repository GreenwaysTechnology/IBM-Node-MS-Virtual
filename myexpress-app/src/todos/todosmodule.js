//build todos rest end points
const express = require('express');
const TODOS = require('../mock-data/todos');

//create router : submodule
const todosModule = express.Router();

//REST End Points :TODOS
//http://localhost:3000/api/todos/list
todosModule.get('/list', function (req, res) {
      res.json(TODOS);
})

//http://localhost:3000/api/todos/:id
//http://localhost:3000/api/todos/2
todosModule.get('/:id', function (req, res) {
      //read Request parameter
      const id = parseInt(req.params.id)
      const filteredTo = TODOS.filter(todo => {
            return todo.id === id;
      });
      res.json(filteredTo);
})

module.exports = todosModule;