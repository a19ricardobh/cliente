const $ol=document.querySelector("#xhr")
const $fragment=document.createDocumentFragment()

// Instanciamos el objeto
const xhr = new XMLHttpRequest()
//console.log(xhr)

// Añadimos el evento
xhr.addEventListener("readystatechange", e=>{

    // Comprobamos el estado de la petición
    //   0  READY_STATE_UNINITIALIZED  
    //   1  READY_STATE_LOADING      --> Los datos es están enviando al servidor
    //   2  READY_STATE_LOADED       --> El servidor respondió al cliente, pero éste aun no tiene la info lista para empezar a interactuar
    //   3  READY_STATE_INTERACTIVE  --> El ..
    //   4  READY_STATE_COMPLETE     --> Ya finaliza todo el proceso correctamente

    if (e.target.readyState !== 4 ) return;

    // Comprobamos si la petición al servidor no devuelve un error
    // Códigos de estado de respuesta HTTP
    if (e.target.status>=200 && e.target.status<300) {
        console.log("Exito!")

        // Respuesta en formato texto
        console.log(e.target.responseText)

        // Respuesta en formato JSON
        const json=JSON.parse(e.target.responseText)
        json.forEach(el=>{
            const $li=document.createElement("li")
            $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        })
        $ol.appendChild($fragment)
    } else {
        console.log("Error!")
        let mensaje=e.target.status.text || "Ocurrió un error"
        $ol.innerHTML=`Error ${e.target.status}: ${mensaje}`
    }
    console.log("Este mensaje cargará de cualquier forma")
})

// Abrimos la petición. Nétodos: GET, POST, PUT, DELETE, ....
// GET --> SELECT
// POST --> INSERT
// UPDATE --> PUT
// DELETE --> DELETE
xhr.open("GET","https://jsonplaceholder.typicode.com/users")

// Cargamos el fichero JSON a través de una petición GET
//xhr.open("GET","assets/users.json")

// Enviamos la peticion al servidor
xhr.send()
