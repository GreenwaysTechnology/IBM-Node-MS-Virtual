"use strict"

module.exports = {
      nodeID: "ibm-billing-server",
      logger: true,
      logLevel: "info",
      transporter: "nats://localhost:4222",
      requestTimeout: 5 * 1000,

      circuitBreaker: {
            enabled: true
      },

      metrics: true
}