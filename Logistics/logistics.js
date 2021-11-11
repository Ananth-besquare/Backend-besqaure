// logistic.js
const Transport = require("./transport_factory");

let truck = Transport.create("truck");
let ship = Transport.create("ship");

// the above truck and ship are shown for simplicity
// ideally, we would have something like this
// let modeOfTransport = Transport.create(process.env.deliverMode);
// where we pass the mode of transport at runtime to make client
// code not aware of modes we support

console.log(truck.deliver());
console.log(ship.deliver());
