// truck.js
const Transport = require("./transport");

class Truck extends Transport {
  constructor() {
    super();
  }
  // override the Transport and provide it's own implementation
  deliver() {
    return "Deliver by land in a box.";
  }
}

module.exports = Truck;
