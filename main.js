import { countries } from "./countries.js";
import { webTechs } from "./web_techs1.js";
console.log(countries, webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[,.]/g, "").split(" ");
console.log(words);
console.log(words.length);
