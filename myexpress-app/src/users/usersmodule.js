//build todos rest end points
const express = require('express');
const USERS = require('../mock-data/users');

//create router : submodule
const usersModule = express.Router();


//REST END POINT : USERS

//http://localhost:3000/api/users/list

usersModule.get('/list', function (req, res) {
      res.json(USERS);
})
//http://localhost:3000/api/users/:id
//http://localhost:3000/api/users/2
usersModule.get('/:id', function (req, res) {
      //read Request parameter
      const id = parseInt(req.params.id)
      const filteredUsers = USERS.filter(user => {
            return user.id === id;
      });
      res.json(filteredUsers);
})

module.exports = usersModule;