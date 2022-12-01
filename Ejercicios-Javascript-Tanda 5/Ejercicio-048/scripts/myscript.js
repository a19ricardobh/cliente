/***************************************************************************************************************
 *
 *   Objetivo: n es de Harshad si es divisible por la suma de sus dígitos
 *
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/
const n = 127;
let i = 0;

Array.from(n.toString()).forEach((e) => {
  i += parseInt(e);
});

if (n % i == 0) {
  console.log(`${n} es un numero de Harshad`);
} else {
  console.log(`${n} no es un de Harshad, no es divisible por ${i}`);
}
