// ship.js
const Transport = require("./transport");

class Ship extends Transport {
  constructor() {
    super();
  }
  // override the Transport and provide it's own implementation
  deliver() {
    return "Deliver by sea in a container.";
  }
}

module.exports = Ship;
