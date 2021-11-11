// index.js
const HouseBuilder = require("./house_builder");

const houseWithParking = new HouseBuilder("Street 1")
  .setFloor(2)
  .setParking(true)
  .setGarden(false)
  .buildInfo();

houseWithParking.showInfo();

const houseWithGarden = new HouseBuilder("Street 2")
  .setFloor(3)
  .setParking(false)
  .setGarden(true)
  .buildInfo();

houseWithGarden.showInfo();

const houseWithNoParking = new HouseBuilder("Street 3")
  .setFloor(3)
  .setGarden(true)
  .buildInfo();

houseWithGarden.showInfo();
