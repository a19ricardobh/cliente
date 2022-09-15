/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             mediante una ventana de alerta. Debemos comprobar que el valor introducido es una cadena
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/
let nome=prompt("Escriba su nombre")
if (!isNaN(parseFloat(nome))) {
    console.log("no es un nombre valido")    
}else{
    alert(`Bienvenido a mi pagina, ${nome}`)
}
