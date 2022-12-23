// Constante magica

// Funcion que determina si hemos llegado al final del proceso
//    Comprobamos si hay alguna fila con todos los números positivos
//    Comprobamos si hay alguna columna con todos los números positivos
//    Comprobamos si la diagonal principal tiene todos los números positivos
//    Comprobamos si la diagonal principal inversa tiene todos los números positivos
// Devolvemos la suma de los elementos cuando todos en la fila, columna o diagonal son positivos
function isEnd(matriz) {

}

// Funcion generadora de la matriz inicial NxN rellena de -1
function generaMatriz(n) {
  const matrixAux=[]
  for (let i = 0; i < n; i++) {
    let vector=[]
    for (let j = 0; j < n; j++) {
      vector[j] = -1
    }
    matrixAux[i]=vector
  }
  return matrixAux
}

// Funcion que genera la constante mágica a partir de los datos iniciales
function constanteMagica(n,k) {

}

//constanteMagica(5,1)=65
/* 
matriz final
[
  [-1, -1, 1, 8, 15],
  [-1, 5, 7, 14, 16],
  [4, 6, 13, -1, -1],
  [10, 12, -1, -1, 3],
  [11, -1, -1, 2, 9],
]
*/

//constanteMagica(3,0)=12
//constanteMagica(3,4)=24

// Resto del código....
const n=5
console.log(generaMatriz(n))