const inventory = require("./inventory.json");
const Store = require("./Store");

const store = new Store("LIFESTYLE", inventory);

console.log(store.find("ski poles"));
