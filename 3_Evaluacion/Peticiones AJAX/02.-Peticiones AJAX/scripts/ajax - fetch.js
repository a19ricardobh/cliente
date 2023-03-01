const $ol=document.querySelector("#xhr")
const $fragment=document.createDocumentFragment()

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
 .then(respuesta=>{ 
    return (respuesta.ok)?respuesta.json():Promise.reject(respuesta)
    //return (respuesta.ok)?respuesta.text():Promise.reject(respuesta)
   })
 .then(json=>{
    json.forEach(el=>{
        const $li=document.createElement("li")
        $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
    })
    $ol.appendChild($fragment)
 })
 .catch(error=>{
    const mensaje=error.statusText + ". Ocurrió un error"
    $ol.innerHTML=`Error ${error.status}: ${mensaje}`
  })
 .finally(()=>console.log("Esto se ejecuta siempre"))