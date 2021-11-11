// movement.js
class Movement {
  constructor(movement) {
    this.move = movement;
  }

  execute = function () {
    this.move();
  };

  changeMovementType(movement) {
    this.movement = movement;
  }
}

module.exports = Movement;
