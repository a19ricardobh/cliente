/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*   Nota: Emplear una funcion a la que se le pasen dos parámetros, peso y altura, que imprima la salida
*         Si nos vieramos en la necesidad de que una función devolviera varios datos ¿cómo podríamos hacerlo?
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
            return parseFloat(n)
        }
    }while(i)
}

let peso=leerDatos("Escribe tu peso (en kg)")
let altura=leerDatos("Escribe tu altura (en metros)")

function indice(a,p){
    return p/(a*a)
}

function riesgo45(imc){
    if (imc<=22){
        return "bajo"
    }else{
        return "medio"  
    }
}

function riesgoMas45(imc){
    if (imc<=22){
        return "medio"
    }else{
        return "alto"
    }
}


console.log(`Tu índice de masa corporal es ${indice(altura,peso)} . Tienes un riesgo ${riesgo45(indice(altura,peso))} de enfermedad coronaria si eres menor de 45 años y ${riesgoMas45(indice(altura,peso))} si tienes más de 45 años`)