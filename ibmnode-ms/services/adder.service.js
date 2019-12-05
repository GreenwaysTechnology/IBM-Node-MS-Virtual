const {
      ServiceBroker
} = require('moleculer');

//Create Service Broker Object :Node(Process)
const broker = new ServiceBroker({
      hotReload: true,
      nodeID: 'IBM-Server-2',
      transporter: "nats://localhost:4222"
});

//create service on Broker
broker.createService({
      name: 'AdderService',
      //biz logic
      actions: {
            //ms biz api
            add() {
                  return `${10 + 10} from ${broker.nodeID}`;
            }
      }
})
//start process
broker.start();
broker.repl();