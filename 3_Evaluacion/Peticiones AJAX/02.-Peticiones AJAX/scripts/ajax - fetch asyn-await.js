const $ol=document.querySelector("#xhr")
const $fragment=document.createDocumentFragment()

async function getData() {
   try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      let json = await respuesta.json()

      if (!respuesta.ok)
         throw {status:respuesta.status,statusText:respuesta.statusText}

      json.forEach(el=>{
         const $li=document.createElement("li")
         $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`
         $fragment.appendChild($li)
     })
     $ol.appendChild($fragment)      
   } catch (error) {
      const mensaje=error.statusText + ". Ocurrió un error"
      $ol.innerHTML=`Error ${error.status}: ${mensaje}`  
   } finally {
      console.log("Esto se ejecuta siempre")
   }
}

getData()
