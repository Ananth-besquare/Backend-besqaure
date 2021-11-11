const strategy = require("./strategy");
const Character = require("./character");

let hero = new Character();
hero.changeMovementType(strategy.Walking);
hero.move();

console.log("OH NO DINOSAURS!!!");

hero.changeMovementType(strategy.Running);
hero.move();

console.log("OH NO DINOSAUR BITE ME!!!");

hero.changeMovementType(strategy.Limping);
hero.move();

console.log("GAINED ANGEL BLESSING!!!");

hero.changeMovementType(strategy.RobotLegs);
hero.move();
