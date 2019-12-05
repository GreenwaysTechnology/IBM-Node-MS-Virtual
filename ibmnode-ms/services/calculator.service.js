const {
      ServiceBroker
} = require('moleculer');

//Create Service Broker Object :Node(Process)
const broker = new ServiceBroker({
      hotReload: true,
      nodeID: 'IBM-Server-1',
      transporter: "nats://localhost:4222"
});

//create service on Broker
broker.createService({
      name: 'CalculatorService',
      //biz logic
      actions: {
            //ms biz api
            //ms biz api
            async add(ctx) {
                  const result = await ctx.call('AdderService.add')
                  return result;
            }
      }
})
//start process
broker.start();
broker.repl();