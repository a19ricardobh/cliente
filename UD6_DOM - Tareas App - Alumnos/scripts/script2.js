const $d=document,
      $formulario=$d.querySelector("#formulario"),
      $tarea=$d.querySelector("#input"),
      $boton=$formulario.querySelector("button"),
      $content=$d.querySelector("#tareas"),
      $template=$d.querySelector("#template-tarea").content

let tareas=[]

function renderTareas(){
    $content.innerHTML=""
    tareas.forEach((element ,index)=> {
        const $clone=$template.cloneNode(true)

        $p=$clone.querySelector("p")
        $i=$clone.querySelectorAll("i")
        $p.textContent=element.tarea
        $i[0].dataset.tarea=index
        $i[1].dataset.tarea=index
        //toggle pone o quita la clase del classList, segun el segundo parametro sea true o false
        $clone.querySelector("div").classList.toggle("realizada",element.activo)
        console.log($i[0].classList)
        $i[0].classList.toggle("fa-check-circle",!element.activo)
        $i[0].classList.toggle("fa-undo-alt",element.activo)
        $content.appendChild($clone)
    });  
}

function eliminarTarea(indice){
    tareas.splice(indice,1)
    renderTareas()
}

function marcarTarea(indice){
    if (tareas[indice].activo){
        tareas[indice].activo=false
    }else{
        tareas[indice].activo=true
    }
    
    renderTareas()
}

$formulario.addEventListener("submit",e=>{
    e.preventDefault()
    
    tareas.push({tarea:$tarea.value,activo:false})
    
    renderTareas()
})

$content.addEventListener("click",e=>{
    if (e.target.classList.contains("text-success")){
        marcarTarea(e.target.dataset.tarea)
    }
    if (e.target.classList.contains("text-danger")){
        eliminarTarea(e.target.dataset.tarea)
    }
})