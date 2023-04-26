const listaDeProductos = [
  {
    id: 1,
    nombre: "Patatas",
    precio: 1,
    imagen: "https://i.blogs.es/a696c0/istock-170187164/1366_2000.jpg",
  },
  {
    id: 2,
    nombre: "Cebollas",
    precio: 1.2,
    imagen:
      "https://static.elcorreo.com/www/multimedia/201906/28/media/cortadas/despensa28-kfAE-U806333285241gG-624x385@El%20Correo.jpg",
  },
  {
    id: 3,
    nombre: "Calabacines",
    precio: 2.1,
    imagen:
      "https://www.gastronomiavasca.net/uploads/image/file/3331/w700_calabacin.jpg",
  },
  {
    id: 4,
    nombre: "Fresas",
    precio: 0.6,
    imagen: "https://img.interempresas.net/fotos/1341264.jpeg",
  },
];

//constantes definicion
let carrito=[] // object {Id,cantidad}

const $d=document,
    $lista=$d.querySelector("#productos"),
    $carrito=$d.querySelector("#carrito"),
    $aside=$d.querySelector(".carrito"),
    $totalId=$d.querySelector("#total"),
    $tempProd=$d.querySelector("#template-producto").content,
    $tempCarrito=$d.querySelector("#template-producto-carrito").content


//funcion para mostrar los productos del carrito
function render(array){
  $carrito.innerHTML=""
  let total=0
  array.forEach((elmt,i) => {
    let clonC=$tempCarrito.cloneNode(true)
    let btn=clonC.querySelector("button")
    let li=clonC.querySelector(".lista-carrito-producto")
    
    let name=listaDeProductos[elmt.id-1].nombre
    let pr=listaDeProductos[elmt.id-1].precio
    total+=elmt.cantidad*pr
    li.innerHTML=`${elmt.cantidad} x ${name} -  ${elmt.cantidad*pr} ` 
    btn.dataset.id=i
    li.appendChild(btn)
    $carrito.append(clonC)
  })
  
  //muestra el total de la compra
  $totalId.innerHTML=total
  
}

//carga inicial de productos
listaDeProductos.forEach(element => {
  let clon=$tempProd.cloneNode(true)
  //console.log(clon)
  let nombre=clon.querySelector(".fichaProductoNombre")
  nombre.innerHTML=element.nombre
  let precio=clon.querySelector(".fichaProductoPrecio")
  precio.innerHTML=element.precio+"  &euro;"
  let img=clon.querySelector("img")
  img.setAttribute("src",element.imagen)
  let boton=clon.querySelector(".btn")
  boton.dataset.id=element.id
  $lista.append(clon)
})  

//añadir productos al carrito
$lista.addEventListener("click",e=>{
  e.preventDefault()
  if (e.target.classList.contains("btn")){
    //comprobar si existe en carrito
    
    
      
      let producto=carrito.find(el=>el.id==e.target.dataset.id)
      if (producto){
        producto.cantidad++
      }else{
        carrito.push({
            id:e.target.dataset.id,
            cantidad:1
        })
      }  
    
    
    localStorage.setItem("carro",JSON.stringify(carrito))
    render(carrito)
  }
})

//eliminar productos del carrito
$aside.addEventListener("click",e=>{
  e.preventDefault()
  
  if (e.target.classList.contains("btn-del") && e.target.id=="boton-vaciar"){
    //vaciar el carrito
    carrito=[]
    localStorage.setItem("carro",JSON.stringify(carrito))
    render(carrito)
  }else if (e.target.classList.contains("btn-del")){
    //eliminar producto seleccionado
    carrito.splice(e.target.dataset.id,1)
    localStorage.setItem("carro",JSON.stringify(carrito))
    render(carrito)
  }
  
})

//recupera los productos del carrito del localStorage
$d.addEventListener("DOMContentLoaded",e=>{

  let carro=JSON.parse(localStorage.getItem("carro"))
  if (carro){
    carrito=carro
    render(carrito)
  }
})
