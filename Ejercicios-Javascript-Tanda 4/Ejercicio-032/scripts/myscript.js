/***************************************************************************************************************
*  
*   Objetivo: Buscar el numero perdido en un array de n elementos. 
*             Están todos los enteros en el array menos uno
*             Array desordenado
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
const array=[52,58,50,54,53,51,57,55,59]
const a2=[3,5,8,4,2,1,7,10,9]


//const found = array.find(element => element[array.indexOf(element)+1] == element+1);
//console.log(found)
function buscaPerdido(array){
    array.sort(function(a, b) {
        if (a>b)
            return 1
        if (a<b)
            return -1
      })
    //console.log(array)
    for (let index = 0; index < array.length-1; index++) {
        if (array[index+1]!=array[index]+1){
            return array[index]+1
        }
    }
}

console.log(buscaPerdido(array))
console.log(buscaPerdido(a2))