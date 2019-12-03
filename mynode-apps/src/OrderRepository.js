const ORDERS = [{
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
class OrderRepository {
      constructor() {
            console.log('Order Repository is being initalized');
      }
      findAll() {
            return ORDERS;
      }
}

module.exports = OrderRepository;