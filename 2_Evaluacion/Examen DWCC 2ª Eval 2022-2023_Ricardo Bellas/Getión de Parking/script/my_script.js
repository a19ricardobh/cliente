/**
 * Sistema de gestión de un parking de 🚗
 *
 * 1. El usuario ingresa la placa de matricula.
 * 2. El usuario presiona Enter o hace click en "Agregar"
 *    - Se comprueba si la placa de matricula es valida (tiene el formato LLL-NNN)
 *    - Se comprueba si la placa de matricula ya existe en el parking. Si existe se indica que la patricula es falsa.
 *    - Se comprueba si hay sitio libre en el parking. Si no existe se informa de ello
 * 3. Se agrega el coche a la primera plaza de parking que este libre que sea una plaza etiquetada con número primo. Si no existe,
 *    se agrega a la primera plaza que no sea primo.
 * 4. Al hacer click en el boton de "Eliminar" se retira el coche del parking. Si la plaza que ocupaba el coche es una plaza
 *    en una posición primo y hay coches en plazas no primo, se busca el primer coche en una plaza no primo y se cambia a la
 *    plaza primo. 
 * 5. Se mostrará durante 2 segundos un mensaje con el pago que debe hacer el usuario (0,2*minutos). Hay descuento del 10% si movimos el coche
 * 6. Hay que actualizar el texto "Tienes N plazas de parking libres" cada vez que se agregue o elimine un coche
 * 7. Cuando el parking este lleno cambiamos el texto a: "Parking lleno" en rojo.
 *
 */

const nFilas = 3,
  nCols = 3;
const matriculas=[{
    id:1,
    placa:"libre",
    hora:""
  },
  {
    id:2,
    placa:"libre",
    hora:""
  },
  {
    id:3,
    placa:"libre",
    hora:""
  },
  {
    id:4,
    placa:"libre",
    hora:""
  },
  {
    id:5,
    placa:"libre",
    hora:""
  },
  {
    id:6,
    placa:"libre",
    hora:""
  },
  {
    id:7,
    placa:"libre",
    hora:""
  },
  {
    id:8,
    placa:"libre",
    hora:""
  },
  {
    id:9,
    placa:"libre",
    hora:""
  },
  {
    id:10,
    placa:"libre",
    hora:""
  },
  {
    id:11,
    placa:"libre",
    hora:""
  },
  {
    id:12,
    placa:"libre",
    hora:""
  },
  {
    id:13,
    placa:"libre",
    hora:""
  },
  {
    id:14,
    placa:"libre",
    hora:""
  },
  {
    id:15,
    placa:"libre",
    hora:""
  },
  {
    id:16,
    placa:"libre",
    hora:""
  },
  {
    id:17,
    placa:"libre",
    hora:""
  },
  {
    id:18,
    placa:"libre",
    hora:""
  },
  {
    id:19,
    placa:"libre",
    hora:""
  }
]
let plazas=19

const $d=document,
      $form=$d.querySelector("form"),
      $tabla=$d.querySelector("table"),
      $b=$d.querySelector("b"),
      $td=$d.querySelector("#template-col").content

const expMat=/[A-Z]{3}-[0-9]{3}/

function agregaMatricula(matricula,hora){
  //console.log(matriculas)
  //buscar el primer sitio libre y si es primo
  let pos=matriculas.find(e=>e.placa=="libre" && esPrimo(e.id))
  if (pos){
    pos.placa=matricula
    pos.hora=hora
    plazas--
  }else{
    let pos2=matriculas.find(e=>e.placa=="libre")
    pos2.placa=matricula
    pos.hora=hora
    plazas--
  }
  
}

function elimina(num){
  let elimina=matriculas.find(e=>e.id==num)
  elimina.placa="libre"
  elimina.hora=""
  plazas++
}

function existePlaca(texto){
  let pos=matriculas.find(e=>e.placa==texto)
  if (pos){
    return false
  }else{
    return true
  }
}

function libre(){
  let pos=matriculas.find(e=>e.placa=="libre")
  if (pos){
    return true
  }else{
    return false
  }
}

function esPrimo(n){
  let i=1
  while (i<n-1) {
    i++
    if  (n%i== 0){
      return false
    }
  }
  return true 
}

function render(array){
  $tabla.innerHTML=""
  $b.innerHTML=""
  $b.innerHTML=plazas
  array.forEach(e => { 
    let td=$d.createElement("td") 
    td.dataset.number=e.id
    td.innerHTML="🚗"
    let small=$d.createElement("small")
    small.append(e.placa)
    td.appendChild(small)
    let small2=$d.createElement("small")
    small2.append(e.hora)
    td.appendChild(small2)
    let boton=$d.createElement("button")
    boton.append("Eliminar")
    boton.dataset.clave=e.id
    td.appendChild(boton)
    $tabla.appendChild(td)
  })
  
}

$form.addEventListener("submit",e=>{
  e.preventDefault()
  let matricula = $form.querySelector("input").value
  let hor= new Date().getHours()
  
  let min= new Date().getMinutes()
  const hora=`${hor}:${min}`
  
  if(expMat.test(matricula) && existePlaca(matricula) && libre()){
    agregaMatricula(matricula,hora)
    render(matriculas)
  }else{
    alert("error en los datos")
  }
})

$tabla.addEventListener("click",e=>{
  e.preventDefault()
  if (e.target.dataset.clave){
   
    elimina(e.target.dataset.clave)
    render(matriculas)
  }
})



