const OrderRepository = require('./OrderRepository');
const OrderService = require('./OrderService');
const OrderController = require('./OrderController');


function init() {
      let controller = new OrderController(new OrderService(new OrderRepository()));
      controller.findAll().forEach(order => console.log(`${order.id} ${order.totalValue} ${order.product}`));
}
init();