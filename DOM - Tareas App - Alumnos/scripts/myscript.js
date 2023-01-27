//formulario=document.querySelector("#formulario")
formulario=document.getElementById("formulario")
itemsTareas=document.querySelector("#tareas")
tareas={};

formulario.addEventListener("submit",e => {
    e.preventDefault()
    console.log(e.target)
    tarea={
        id:new Date().getTime(),
        texto:e.target.input.value,
        estado:false
    }
    tareas[tarea.id] = {...tarea}
    formulario.reset()
    e.target.input.focus()
    pintarTareas()
})

function pintarTareas() {
    itemsTareas.innerHTML=""
    //localStorage.setItem('tareas', JSON.stringify(tareas))
    if (Object.keys(tareas).length==0) {
        itemsTareas.innerHTML="<p class='alert alert-dark text-center'>Sin tareas pendientes &#10084;</p>"
        return
    }
    else {
        Object.values(tareas).forEach(el=>{
            div=document.createElement("div")
            if (el.estado) 
                div.setAttribute("class","alert alert-info d-flex justify-content-between align-items-center")
            else
                div.setAttribute("class","alert alert-warning d-flex justify-content-between align-items-center")

            p=document.createElement("p")
            if (el.estado) {
                p.setAttribute("class","m-0")
                p.style.textDecoration = "line-through"
            }
            else
                p.setAttribute("class","m-0")

            p.appendChild(document.createTextNode(el.texto))

            i1=document.createElement("i")
            if (el.estado)
                i1.setAttribute("class","fas fa-undo-alt text-success mx-1")
            else
                i1.setAttribute("class","fas fa-check-circle text-success mx-1")
            i1.setAttribute("role","button")
            i1.dataset.id=el.id

            i2=document.createElement("i")
            i2.setAttribute("class","fas fa-minus-circle text-danger")
            i2.setAttribute("role","button")
            i2.dataset.id=el.id

            h3=document.createElement("h3")
            h3.setAttribute("class","m-0")

            h3.appendChild(i1)
            h3.appendChild(i2)
            div.appendChild(p)
            div.appendChild(h3)

            itemsTareas.appendChild(div)
        })
    }
}

itemsTareas.addEventListener('click', (e)=>{
    if (e.target.classList.contains("fa-minus-circle")) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    if (e.target.classList.contains('fa-check-circle')) {
        const tarea = tareas[e.target.dataset.id]
        tarea.estado = true
        tareas[e.target.dataset.id] = { ...tarea }
        pintarTareas()
    }

    if (e.target.classList.contains('fa-undo-alt')) {
        const tarea = tareas[e.target.dataset.id]
        tarea.estado = false
        tareas[e.target.dataset.id] = { ...tarea }
        pintarTareas()
    }
    e.stopPropagation()
})

document.addEventListener("DOMContentLoaded",pintarTareas)