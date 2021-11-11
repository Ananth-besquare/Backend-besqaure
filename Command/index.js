// index.js
const Calculator = require("./calculator");
const Commands = require("./command.js");

const calculator = new Calculator();
calculator.execute(new Commands.AddCommand(10));

calculator.execute(new Commands.SubtractCommand(4));

console.log(calculator.value);
console.log(calculator.history);
