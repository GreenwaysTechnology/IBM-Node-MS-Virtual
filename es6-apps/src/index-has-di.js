//Controller
class OrderController {
      constructor(orderService = new OrderService()) {
            this.orderService = orderService;
      }
      //biz methods
      findAll() {
            return this.orderService.findAll();
      }
}

//Service
class OrderService {
      constructor(repository = new OrderRepository()) {
            //has -a: dependency injection
            this.repository = repository;
      }
      findAll() {
            return this.repository.findAll();
      }
}

//Repository
class OrderRepository {
      constructor() {

      }
      findAll() {
            return [{
                        id: 1,
                        totalValue: 210232,
                        product: 'Lenvo think PAD'
                  },
                  {
                        id: 2,
                        totalValue: 310232,
                        product: 'Mac Book Pro'
                  }
            ];
      }
}
//Main App
/* let repository = new OrderRepository();
let orderService = new OrderService(repository);
let orderController = new OrderController(orderService); */
let orderController = new OrderController(new OrderService(new OrderRepository()));
//invoke biz mehtods
orderController.findAll().forEach(order => {
      console.log(`${order.id} ${order.totalValue} ${order.product}`)
});