//export let usuario = "Julian";
const PI = Math.PI;
export { PI };
//export {PI as constante}

// Solo exportamos lo que necesitamos
let password = "Abcd1234.";
export let usuario = "Julian";

/* 
export default function saludar() {
  console.log(`Hola, soy ${usuario}`);
} */

function saludar() {
  console.log(`Hola, soy ${usuario}`);
}

export { saludar as default };

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
