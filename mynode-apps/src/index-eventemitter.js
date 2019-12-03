//Event Emitter
//events.js
const EventEmitter = require('events');

//Create EventEmitter Object
const emitter = new EventEmitter();

//Subscriber : Who listens for signal(event) and data
emitter.on('greet', function (data) {
      console.log('data', data);
});
//Publisher: Publisher will send a signal(event) and data

//greet is event, Hello is data
emitter.emit('greet', 'Hello');