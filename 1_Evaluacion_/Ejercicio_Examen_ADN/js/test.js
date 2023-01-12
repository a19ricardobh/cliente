// La solucion planteada anteriormente estaba bien, pero se podía mejorar
// para emplear menos variables, reducir el número de iteraciones y mejorar la lectura

const adn = "AAGGGGTCC";
let solucion = [];
let inicio = 0,
  fin = 0;

function secuenciaAnino(adn, i) {
  let secuencia = adn[i];
  while (adn[i] == adn[i + 1]) {
    secuencia += adn[i + 1];
    i++;
  }
  return secuencia;
}

//incluir cadenas en array solucion
let pos = 0,
  max = 0;
seccion = "";
for (let i = 0; i < adn.length; i += seccion.length) {
  seccion = secuenciaAnino(adn, i);
  if (seccion.length > max) {
    pos = i;
    max = seccion.length;
  }
  solucion.push(Array.from(seccion));
}

console.log(`La secuencia más larga corresponde al aminoácido ${adn[pos]}`);
console.log(
  `La secuencia se produce a partir de la ${pos + 1} posición del ADN del virus`
);
console.log(`La longitud de la secuencia de aminoácido más larga es ${max}`);
console.log(
  `El ADN del virus desactivado es ${adn.replace(
    adn.slice(pos, pos + max),
    ""
  )}`
);
