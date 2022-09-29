/***************************************************************************************************************
*  
*   Objetivo: Buscar contactos. Tenemos un array de objetos que representan diferentes personas de nuestra lista de contactos y
*             debes crear la funcion buscarContacto a la que se le pasan dos parametros: el nombre del contacto y el nombre de 
*             una propiedad de un contacto
*
*   Entrada : --
*
*
*   Salida  : Si ambos parámetros pasados existen, devolveremos el valor de la propiedad para ese contacto
*             Si ese contacto no existe, devolveremos "No existe ese contacto"
*             Si la propiedad no existe para el contado, devolveremos "No existe esa propiedad"
*
*             Por ejemplo:
*                  buscarContacto("Kristian", "lastName") devolveria "Vos"
*                  buscarContacto("Sherlock", "likes") devolveria ["Intriguing Cases", "Violin"]
*                  buscarContacto("Harry", "likes") devolveria an array
*                  buscarContacto("Bob", "number") devolveria "No existe ese contacto"
*                  buscarContacto("Bob", "potato") devolveria "No existe ese contacto"
*                  buscarContacto("Akira", "address") devolveria "No existe esa propiedad"
*
*
***************************************************************************************************************/

const contactos = [
    {
        "nombre": "Akira",
        "apelidos": "Laine",
        "telefono": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "nombre": "Harry",
        "apellidos": "Potter",
        "telefono": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "nombre": "Sherlock",
        "apellidos": "Holmes",
        "telefono": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "nombre": "Kristian",
        "apellidos": "Vos",
        "telefono": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function buscarContacto(nombre, prop) {
  const buscado=[]
  contactos.forEach(element => {
    if (element.nombre==nombre){
        buscado.push(element)
    }
  })
  if (buscado.length==0){
    return "No existe ese contacto"
  }else{
    console.log(buscado[0].likes)
    
  }

}

buscarContacto("Akira", "likes");
/*buscarContacto("Kristian", "lastName") 
buscarContacto("Sherlock", "likes") 
buscarContacto("Harry", "likes") 
buscarContacto("Bob", "number") 
buscarContacto("Bob", "potato") 
buscarContacto("Akira", "address") */
