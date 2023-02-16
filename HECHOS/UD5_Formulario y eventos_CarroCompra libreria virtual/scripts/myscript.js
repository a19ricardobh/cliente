const $d=document,
        $formPrecio=$d.querySelector(".formPrecio"),
        $checkbox=$d.getElementsByName("libro"),
        $libros=$d.querySelectorAll(".libro")

//console.log($checkbox)
function calcularTotal(event) {
    let total=0
    for(let checkbox of $checkbox){
        if(checkbox.checked){
            total+=parseFloat(checkbox.value)
        }
    }
    //console.log(total)
    $formPrecio.resultado.value=total
}

$formPrecio.addEventListener("click",event=>{
   /* if (event.target.getAttribute("type")=="checkbox") {
        calcularTotal(event)
    }*/
    /*Con la seleccion en el div de libros */
    let id=parseInt(event.target.getAttribute("data-id"))
    $libros[id-1].classList.toggle("seleccionado")
    if (event.target.getAttribute("type")!="checkbox"){
        $libros[id-1].querySelector("input").checked=!$libros[id-1].querySelector("input").checked
    }
    calcularTotal(event)
})

