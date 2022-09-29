/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let texto=prompt(mensaje)
    do{
        if (!isNaN(texto)) {
            texto=prompt(mensaje)
        }else {
            i=false
            return texto
        }
    }while(i)
}

let texto
let salida=""
do{
    //let texto1 ="<p>"
    texto=leerDatos("Introduce una cadena. Para salir escribe cancelar")
    //texto1+=texto+"</p>"
    //console.log(texto1)
    salida+=(texto!=="cancelar")?`<p>${texto}</p>`:""
    //document.querySelector("body").innerHTML=texto1
} while (texto!=="cancelar") 

document.querySelector("body").innerHTML=salida


