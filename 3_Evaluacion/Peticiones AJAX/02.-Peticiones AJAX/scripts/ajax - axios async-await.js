/* https://github.com/axios/axios */

const $ol=document.querySelector("#xhr")
const $fragment=document.createDocumentFragment()

async function axiosGetData() {
  try {
    let respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
    let json = await respuesta.data
       
    json.forEach(el=>{
      const $li=document.createElement("li")
      $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`
      $fragment.appendChild($li)
    })
    $ol.appendChild($fragment)      
  } 
  catch (error) {
    let mensaje=error.response.statusText + ". Ocurrió un error"
    $ol.innerHTML=`Error ${error.response.status}: ${mensaje}`  
  } 
  finally {
    console.log("Esto se ejecuta siempre")
  }
}

axiosGetData()
