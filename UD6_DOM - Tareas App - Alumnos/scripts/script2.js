const $d=document,
      $formulario=$d.querySelector("#formulario"),
      $tarea=$d.querySelector("#input"),
      $boton=$formulario.querySelector("button"),
      $content=$d.querySelector("#tareas"),
      $template=$d.querySelector("#template-tarea")

let tareas=[]

function renderTareas(){
    $content.innerHTML=""
    const $clone=$template.cloneNode(true)
    $p=$clone.querySelector("p")
    console.log($p)
    $i=$clone.querySelectorAll("i")
    tareas.forEach((element ,index)=> {
        $p.textContent=element
        $i[0].dataset.tarea=index
        $i[1].dataset.tarea=index
        $content.appendChild($clone)
    });
    
}

$formulario.addEventListener("submit",e=>{
    e.preventDefault()
    
    tareas.push($tarea.value)
    renderTareas()
})