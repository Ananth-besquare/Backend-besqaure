// index.js
const Shipping = require("./shipping");
const ShippingAdapter = require("./shipping_adapter");

var shipping = new Shipping();
var adapter = new ShippingAdapter();

// original shipping object and interface
var cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost: " + cost);

// new shipping object with adapted interface
cost = adapter.request("78701", "10010", "2 lbs");

console.log("New cost: " + cost);
