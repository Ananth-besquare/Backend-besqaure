// house_builder.js
const House = require("./house");

class HouseBuilder {
  constructor(address) {
    this.address = address;
  }

  setFloor(floor) {
    this.floor = floor;
    return this;
  }

  setParking(parking) {
    this.parking = parking;
    return this;
  }

  setGarden(garden) {
    this.garden = garden;
    return this;
  }

  buildInfo() {
    return new House(this);
  }
}

module.exports = HouseBuilder;
