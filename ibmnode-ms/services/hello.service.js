const {
      ServiceBroker
} = require('moleculer');

//Create Service Broker Object :Node(Process)
const broker = new ServiceBroker();

//create service on Broker
broker.createService({
      name: 'GreeterService',
      //biz logic
      actions: {
            //ms biz api
            hello() {
                  return 'Hello Moleculer!';
            }
      }
})
//start process
broker.start();
broker.repl();