/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*             Tenemos que comprobar que se introduce una cadena y un número entero
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/
let nome=prompt("Escriba su nombre")
let edad=prompt("Escriba su edad")

if ((!isNaN(parseFloat(nome))) || (isNaN(parseFloat(edad)))) {
    console.log("los datos introducidos no son validos")    
}else{
    alert(`Tu nombre es ${nome} y tienes ${edad} años`)
}