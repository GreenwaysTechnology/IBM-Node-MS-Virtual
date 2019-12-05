"use strict"

module.exports = {
      name: 'billingservice',
      events: {
            "order.created": {
                  handler(payload) {
                        this.logger.info('Order successully Created');
                  }
            }
      },
      actions: {
            async process(ctx) {
                  return {
                        billno: 'A0001X98',
                        product: 'Lenvo Think Pad P2 Mobile Edition',
                        qty: 1,
                        price: 2000,
                        message: this.broker.nodeID
                  }
            }
      }
}