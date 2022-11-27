// La solucion planteada era correcta, pero se podia mejorar reduciendo
// el uso de variables y reduciendo el código

const MONEDAS = [200, 100, 50, 20, 10, 5, 2, 1];
let valor = 250;
let pago = 725;
let devolucion = pago - valor;

function calculaCambio(dev) {
  let i = 0;
  let cambio = [];
  while (dev) {
    while (dev >= MONEDAS[i]) {
      dev -= MONEDAS[i];
      cambio.push(MONEDAS[i]);
    }
    i++;
  }
  return cambio;
}

if (devolucion < 0) {
  console.log(`No es suficiente dinero, tienes que entregar más monedas`);
} else if (devolucion > 0) {
  const array = calculaCambio(devolucion);
  console.log("La máquina devuelve las siguientes monedas");
  console.log(array.toString());
} else {
  console.log(`No se devuelve nada porque has pagado el precio exacto`);
}
