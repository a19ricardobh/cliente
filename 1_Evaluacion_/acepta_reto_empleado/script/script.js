const N = 5;
let j = N;

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

const array = Array.from({ length: N }, () => aleatorio(1, 20));

const solucion = [];
array.forEach((el, i) => {
  i == 0
    ? solucion.push(el)
    : solucion.push(
        el * (i + 1) - solucion.reduce((acc, valor, indice) => acc + valor, 0)
      );
});

/* 
let dias = 1;
let patente = 0;
for (let i = 0; i < array.length; i++) {
    if (i == 0) {
        solucion.push(array[i]);
    dias++;
    patente += array[i];
} else {
    let dia = array[i] * dias - patente;
    solucion.push(dia);
    patente += dia;
    dias++;
}
}
 */
console.log(array);
console.log(solucion);
