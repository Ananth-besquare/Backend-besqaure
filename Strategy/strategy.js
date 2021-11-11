// strategy.js
const Movement = require("./movement");

module.exports = {
  Running: new Movement(function () {
    console.log("I'm running!");
  }),
  Walking: new Movement(function () {
    console.log("I'm walking!");
  }),
  Limping: new Movement(function () {
    console.log("I'm hurt! I can only limp!");
  }),
  RobotLegs: new Movement(function () {
    console.log("Too fast!!!, Look out humans!");
  }),
};
