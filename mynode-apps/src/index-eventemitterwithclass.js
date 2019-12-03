const EventEmitter = require('events');


//domain class with event emitters

class OrderService extends EventEmitter {
      constructor() {
            super();
            this.on('order', function (order) {
                  console.log('Order has been processed!')
                  console.log(order);
            });
      }
      //biz method
      placeOrder(order) {
            this.emit('order', order);
      }
}
let orderService = new OrderService();
orderService.placeOrder({
      id: 1,
      totalValue: 10000,
      name: 'Lenvo Think Pad Gen 2'
})