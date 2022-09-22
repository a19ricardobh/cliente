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

while(true){
    let texto=leerDatos("Introduce una cadena. Para salir escribe cancelar")
    document.write(texto)
    if (texto=="cancelar"){
        break
    }
} 
    
