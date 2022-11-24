//import saludar, { Saludar, PI, usuario } from "./constantes.js";

import { default as hola, Saludar, PI, usuario } from "./constantes.js";

//import * as cts from "./constantes.js";
//console.log(cts.PI);

//import { sumar, restar } from "./aritmetica.js";
//import { aritmetica } from "./aritmetica.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivos del módulo");

console.log(`El usuario es ${usuario}`);
console.log(`El valor de PI es ${PI}`);

//console.log(`La suma de 3 y 4 es ${sumar(3, 4)}`);
//console.log(`La resta de 3 y 4 es ${restar(3, 4)}`);

//console.log(`La suma de 3 y 4 es ${aritmetica.sumar(3, 4)}`);
//console.log(`La resta de 3 y 4 es ${aritmetica.restar(3, 4)}`);

console.log(`La suma de 3 y 4 es ${calculos.sumar(3, 4)}`);
console.log(`La resta de 3 y 4 es ${calculos.restar(3, 4)}`);

//saludar();
hola();

new Saludar();
