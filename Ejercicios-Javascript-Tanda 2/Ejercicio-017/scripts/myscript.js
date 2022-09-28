/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    mayorEdad(){
        if (this.edad>=18){
            return true
        }else{
            return false
        }   
    }
  }

  let juan = new Persona("Juan",25)
  let pedro = new Persona("Peter",12)
  console.log(juan)
  console.log(juan.mayorEdad())
  console.log(pedro)
  console.log(pedro.mayorEdad())