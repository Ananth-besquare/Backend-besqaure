// transport_factory.js

const Truck = require("./truck");
const Ship = require("./ship");

class Transport {
  create(type) {
    switch (type) {
      case "truck":
        return new Truck();
      case "ship":
        return new Ship();
      default:
        throw new Error("Unsupported transport type");
    }
  }
}

module.exports = new Transport();
