"use strict"

module.exports = {
      nodeID: "ibm-cart-server",
      logger: true,
      logLevel: "info",
      transporter: "nats://localhost:4222",
      requestTimeout: 5 * 1000,

      circuitBreaker: {
            enabled: true
      },

      metrics: true
}