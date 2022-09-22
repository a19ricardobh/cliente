/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
*
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

let num=leerDatos("Escribe un numero entero")

let texto1=""
for (let i=0;i<=num;i++) {
    if (i==num)
        texto1+=i
    else
        texto1+=i+", "
    // texto1=(i==num)?texto1+i:texto1+i+", "
}
console.log(texto1) 

/* const vector=[]
for (let i=0;i<=num;i++) {
    vector.push(i)
}
console.log(vector.join(", ")) */

/* function doble(x) {
    return 2*x
}

const doble2=x=>2*x */

//console.log(Array.from({length:num},(el,indice)=>indice).join(", "))








