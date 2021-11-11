// house.js
class House {
  constructor(builder) {
    this.address = builder.address;
    this.floor = builder.floor;
    this.parking = builder.parking;
    this.garden = builder.garden;
  }

  showInfo() {
    console.log(this);
  }
}

module.exports = House;
