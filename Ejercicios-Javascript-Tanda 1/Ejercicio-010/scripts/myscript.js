/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar si:
*                   - La edad es un número entero mayor que 0 (indicaremos el error)
*                   - La edad no puede ser superior a 120 (indicaremos el error)
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

let edad=leerDatos("Pon tu edad")
//console.log(Number.isInteger(parseFloat(edad)))
/* con if
if (edad<=0 || edad>120){
    alert("la edad debe estar entre 0 y 120")
}else{
    if (edad<30){
        alert("Ponte a trabajar !!!")
    }else if (edad>=30 && edad<=64){
        alert("Que ganas tengo de jubilarme !!!")
    }else if(edad>=65){
        alert("Descansa un poco !!!")
    }
} */
// con switch
switch(true) {
    case (edad<=0):
        alert("")
        break
    case (edad<30):
        alert("Ponte a trabajar !!!")
        break
    case  (edad>=30 && edad<=64):
        alert("Que ganas tengo de jubilarme !!!")
        break
    case (edad>=65):
        alert("Descansa un poco !!!")
        break
    case (edad>=120):
        alert("")
}