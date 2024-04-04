//import add from "./module/module.mjs" //will throw collision exception
import { add as sum } from "./module/module.mjs"; //works

function add(x, y) {
  return x + y;
}

console.log(add(1, 1));
console.log(sum(1, 1));
