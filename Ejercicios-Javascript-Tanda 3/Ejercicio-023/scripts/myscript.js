/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
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

let num=leerDatos("Escribe porcentaje de acierto")

function notas(num){
    switch (true) {
        case num<60:
            return "El examen se cualifica con un F"
            break;
        case num<70:
            return "El examen se cualifica con un D"
            break;
        case num<80:
            return "El examen se cualifica con un C"
            break;
        case num<90:
            return "El examen se cualifica con un B"
            break;
        default:
            return "El examen se cualifica con un A"
            break;
    }
}

console.log(notas(num))