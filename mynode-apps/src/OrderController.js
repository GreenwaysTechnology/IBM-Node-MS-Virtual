const OrderService = require('./OrderService');

class OrderController {
      constructor(orderService = new orderService()) {
            this.orderService = orderService;
      }
      findAll() {
            return this.orderService.findAll();
      }
}
module.exports = OrderController