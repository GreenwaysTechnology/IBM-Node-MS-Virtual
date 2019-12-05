const {
      ServiceBroker
} = require('moleculer');

//Create Service Broker Object :Node(Process)
const broker = new ServiceBroker({
      hotReload: true,
      transporter: "nats://localhost:4222",
      registry: {
            strategy: 'random'
      }
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