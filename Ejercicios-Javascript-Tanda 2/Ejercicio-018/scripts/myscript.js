/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
*             Devolver el promedio de todas las edades
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : --
*
*
*   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
*
*   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas 
*         La edad de la persona será un número aleatorio entero entre 1 y 100
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
    getEdad(){
        return this.edad
    }
  }

function ramdom(min,max){
    return Math.floor(Math.random() * (max - min +1) + min)
}

const nombres=["Pepe","Ana","Eva","Juan","Luis"] 


//creamos el array de personas
const personas=[]
for (let index = 0; index < 8; index++) {

    personas.push(new Persona(nombres[ramdom(0,4)],ramdom(1,100)))
    
}

console.log(personas)

let m=0
let n=0
let medMay=0
let medMen=0
personas.forEach(element => {
    if (element.mayorEdad()){
        m++
        medMay+=element.getEdad()
    } else{
        n++
        medMen+=element.getEdad()
    }   
});

console.log(`${m} personas son mayores de edad`)
console.log(`${(medMay+medMen)/personas.length} promedio de todas las edades`)
console.log(`${(medMay)/m} promedio de mayores de edad`)
console.log(`${(medMen)/n} promedio de menores de edad`)

//Otra forma
/* const personas=Array.from({length:20},()=>{
    return{ nombre:nombres[ramdom(0,nombres.length-1)],
            edad:ramdom(1,100)
    }
})
*/