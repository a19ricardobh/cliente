/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número (positivo o negativo) tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*   Nota:   : ¿Es necesario almacenar los números en un array?
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n)) {
            n=prompt(mensaje)
        }else{
            i=false
            return parseInt(n)
        }
    }while(i)
}
//sin necesidad de array:
let numero,i=0
console.log("El mayor de ")
while (numero!=0) {
    numero=leerDatos("Escribe un numero. Pon cero para salir")
    if (numero > i){
        i=numero
    }
    console.log(` ${numero} , `)
}
console.log(` es el numero ${i}`)
