"use strict"
const ApiGwService = require("moleculer-web");

module.exports = {
      name: 'api',
      mixins: [ApiGwService],
      settings: {
            // Change port setting
            port: process.env.port || 3000,
            routes: [{
                  path: "/api",
                  whitelist: [
                        // Access to any actions in all services under "/api" URL
                        "**"
                  ],
                  aliases: {
                        //"GET cart/checkout": "cartservice.checkout"
                        "REST cart": "cartservice"
                  },
                  // Disable direct URLs (`/posts/list` or `/posts.list`)
                  mappingPolicy: "restrict"
            }]
      }

}