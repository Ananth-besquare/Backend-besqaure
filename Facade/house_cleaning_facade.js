// house_cleaning_facade.js
const Bed = require("./bed");
const Freshner = require("./freshner");
const Trash = require("./trash");

class HouseCleaningFacade {
  constructor({
    bed = new Bed(),
    trashCan = new Trash(),
    airFreshener = new Freshner(),
  } = {}) {
    this.bed = bed;
    this.trashCan = trashCan;
    this.airFreshener = airFreshener;
  }

  cleanTheHouse() {
    this.bed.makeTheBed();
    this.trashCan.takeOutTrash();
    this.airFreshener.spray();
  }
}

module.exports = HouseCleaningFacade;
