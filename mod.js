import { add, Greeter } from "./lib/rs_lib.js";

// adds
console.log(add(1, 1));

// greets
const greeter = new Greeter("world");
console.log(greeter.greet());
