//build todos rest end points
const express = require('express');
const TODOS = require('../mock-data/todos');

//create router : submodule
const todosModule = express.Router();

//middleware is called for any url,any method in the TODOS Module
todosModule.use(function (req, req, next) {
      console.info('TODOS API started')
      next();
})
todosModule.use('/list', function (req, res, next) {
      console.info(`TODOS  API : ${req.method} `)
      next();
})

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
todosModule.post('/', function (req, res) {
      let todo = req.body;
      console.log(todo);
      res.json(TODOS.concat(todo));
});


module.exports = todosModule;