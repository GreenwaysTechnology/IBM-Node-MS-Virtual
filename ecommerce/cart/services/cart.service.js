"use strict"

module.exports = {
      name: 'cartservice',
      settings: {

      },
      actions: {
            list: {
                  rest: 'GET /',
                  async handler(ctx) {
                        ctx.broadcast('order.created');
                        const billingInfo = await ctx.call('billingservice.process');
                        return billingInfo;
                  }
            }
      }
}