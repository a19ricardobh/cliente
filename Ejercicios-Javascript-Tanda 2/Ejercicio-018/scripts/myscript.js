/***************************************************************************************************************
 *
 *   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
 *             Devolver el promedio de todas las edades
 *             Devolver el promedio de las personas mayores de edad
 *             Devolver el promedio de las personas menores de edad
 *
 *   Entrada : --
 *
 *
 *   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
 *
 *   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas
 *         La edad de la persona será un número aleatorio entero entre 1 y 100
 *
 ***************************************************************************************************************/

function pedirDato(msg, tipo) {
  let centinela;
  let dato;
  do {
    dato = prompt(msg);
    if (tipo == "cadena") centinela = isNaN(dato) ? true : false;
    if (tipo == "entero")
      centinela =
        !isNaN(dato) && Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "flotante")
      centinela =
        !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
  } while (!centinela);
  return dato;
}

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

let nPersonas = parseInt(pedirDato("Numero de personas: ", "entero"));
const nombres = [
  "Ana",
  "Juan",
  "Pepe",
  "Luis",
  "Rosa",
  "Jose",
  "Mar",
  "Amelia",
  "Eva",
  "Luis",
];
const personas = Array.from({ length: nPersonas }, () => {
  return {
    nombre: nombres[aleatorio(0, nombres.length - 1)],
    edad: aleatorio(1, 100),
    mayor() {
      return this.edad >= 18;
    },
  };
});

const personasMayoresDeEdad = personas.filter((el) => el.mayor());
const personasMenoresDeEdad = personas.filter((el) => !el.mayor());

//console.log(personasMayoresDeEdad);
//console.log(personasMenoresDeEdad);

let promedioEdades =
  personas.reduce((anterior, actual) => anterior + actual.edad, 0) /
  personas.length;
let promedioEdadesMayores =
  personasMayoresDeEdad.reduce(
    (anterior, actual) => anterior + actual.edad,
    0
  ) / personasMayoresDeEdad.length;
let promedioEdadesMenores =
  personasMenoresDeEdad.reduce(
    (anterior, actual) => anterior + actual.edad,
    0
  ) / personasMenoresDeEdad.length;

console.log(
  `El promedio de edad de todas las personas es ${promedioEdades.toFixed(2)}`
);

if (personasMayoresDeEdad.length)
  console.log(
    `El promedio de edad de todas las personas mayores de edad es ${promedioEdadesMayores.toFixed(
      2
    )}`
  );

if (personasMenoresDeEdad.length)
  console.log(
    `El promedio de edad de todas las personas menores de edad es ${promedioEdadesMenores.toFixed(
      2
    )}`
  );
