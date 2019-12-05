const {
      ServiceBroker
} = require('moleculer');

//Create Service Broker Object :Node(Process)
const broker = new ServiceBroker();

//create service on Broker
broker.createService({
      name: 'WelcomeService',
      //biz logic
      actions: {
            //ms biz api
            async welcome(ctx) {
                  const result = await ctx.call('HelloService.hello')
                  return result;
            }
      }
})

broker.createService({
      name: 'HelloService',
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