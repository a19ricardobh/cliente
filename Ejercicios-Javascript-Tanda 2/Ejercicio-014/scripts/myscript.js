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

let i=true
while(i){
    let texto1 ="<p>"
    let texto=leerDatos("Introduce una cadena. Para salir escribe cancelar")
    texto1+=texto+"</p>"
    //console.log(texto1)
    document.querySelector("body").innerHTML=texto1
    if (texto=="cancelar"){
        i=false
    }
    //document.querySelector("body").innerHTML=texto1
} 
