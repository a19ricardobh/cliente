/***************************************************************************************************************
*  
*   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
*
*
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (!isNaN(n)) {
            n=prompt(mensaje)
        }else{
            i=false
            return n
        }
    }while(i)
}

let cadena=leerDatos("Escribe una cadena de texto")

function frecuenciaVocales(texto){
   // let array=Array.from(texto)
   let array=texto.split('')
    let vocala=array.filter(el=>el=='a')
    let vocale=array.filter(el=>el=="e")
    let vocali=array.filter(el=>el=="i")
    let vocalo=array.filter(el=>el=="o")
    let vocalu=array.filter(el=>el=="u")
    //return vocala
    const vocales=Array.from({length:1},()=>{
        return{ a: vocala.length,
                e: vocale.length,
                i: vocali.length,
                o: vocalo.length,
                u: vocalu.length
        }
    })
return vocales
}

console.log(frecuenciaVocales(cadena))