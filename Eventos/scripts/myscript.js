const $d=document,
    $contenedorI=$d.querySelector("#contInt"),
    $contenedorE=$d.querySelector("#contExt"),
    $enlace=$d.querySelector("a"),
    $enlaces=$d.querySelectorAll("a")
    
/*$contenedorE.onclick=function (event){
    alert("Contenedor exterior")
}

$contenedorI.onclick=function (event){
    event.stopPropagation() //para que no vaya hacia arriba
    alert("Contenedor interno")
}*/

$contenedorE.addEventListener("click",event=>{
    alert("Contenedor exterior")
})
$contenedorI.addEventListener("click",event=>{
//    event.stopPropagation()
//    alert("Contenedor interior")
//    event.preventDefault() //para que no haga el funcionamiento estandar del enlace
    alert(`${event.target.textContent}`) //para no hacer una funcion para cada boton
})

/*$enlaces.forEach(enlace=>enlace.addEventListener("click",evento=>{
    alert(`${evento.target.textContent}`)
}))*/