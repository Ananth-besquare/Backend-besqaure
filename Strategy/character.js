// character.js
class Character {
  changeMovementType(movement) {
    this.movement = movement;
  }

  move() {
    this.movement.execute();
  }
}

module.exports = Character;
