// calculator.js
class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  execute(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

module.exports = Calculator;
