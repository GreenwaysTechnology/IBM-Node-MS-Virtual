const OrderRepository = require('./OrderRepository');

class OrderService {
      constructor(orderRepo = new OrderRepository()) {
            this.orderRepo = orderRepo;
      }
      findAll() {
            return this.orderRepo.findAll();
      }
}

module.exports = OrderService;