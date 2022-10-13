/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                2.- Devuelve los elementos del primer array que no están en el segundo array
*                3.- Devuelve los elementos del segundo array que no están en el primer array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
*             Elementos del primer array no presentes en el segundo array: ...
*             Elementos del segundo array no presentes en el primer array: ....
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n)) {
            n=prompt(mensaje)
        }else {
            i=false
            return parseInt(n)
        }
    }while(i)
}
function rellenaArray(n){
    const arreglo=[]
    for (let index = 0; index < n; index++) {
        arreglo.push(Math.floor(Math.random() * (100 -(-100) +1)+(-100)))
    }  
    return arreglo 
}

function comunes(a,b) {
    const texto=[]
    a.forEach(element => {
       if (b.includes(element)) {
            texto.push(element)
       }
    });
    return texto
}

function primeroNoSeg(a,b) {
    const texto=[]
    a.forEach(element => {
       if (!b.includes(element)) {
            texto.push(element)
       }
    });
    return texto
}

function segundoNoPrim(a,b) {
    const texto=[]
    b.forEach(element => {
       if (!a.includes(element)) {
            texto.push(element)
       }
    });
    return texto
}




let lg=leerDatos("Introduce numero entero")
let arr1=rellenaArray(lg)
let arr2=rellenaArray(lg)
console.log(arr1)
console.log(arr2)

//elementosComunes=arr1.filter(el=>arr2.includes(el))
//elementosNoComunes=arr1.filter(el=>!arr2.includes(el))

console.log(`Los arrays tienen ${comunes(arr1,arr2).length} elementos comunes: ${comunes(arr1,arr2).join(", ")}`)
console.log(`Elementos del primer array no presentes en el segundo array: ${primeroNoSeg(arr1,arr2).join(", ")}`)
console.log(`Elementos del segundo array no presentes en el primer array: ${segundoNoPrim(arr1,arr2).join(", ")}`)
