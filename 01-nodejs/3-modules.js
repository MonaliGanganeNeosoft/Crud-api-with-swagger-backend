//modules
//->commonJS,every file is module(by default)
//modules->encapsulated code(only share minimum)

// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

const names = require("./4-names");
console.log(names);
const sayHi = require("./5-utils");
console.log(sayHi);
const data = require("./6-alternative-flavour");
console.log(data);
require("./7-mind-grenade");

sayHi("Moni");
sayHi(names.john);
sayHi(names.peter);
