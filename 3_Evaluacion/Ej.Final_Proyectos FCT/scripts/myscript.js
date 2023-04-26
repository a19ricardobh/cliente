const   $d=document,
        $select=$d.querySelector("#ciclos"),
        $main=$d.querySelector("main"),
        $form=$d.querySelector("#form-ciclos"),
        $tCabecera=$d.querySelector("#template-listado-datos").content,
        $tDatos=$d.querySelector("#template-body-datos").content,
        $tItem=$d.querySelector("#template-item").content
let ciclo2=""

function ajax(params) {
    let {url,method,fsuccess,ferror,data}=params
    const opciones={
        method: method || "GET",
        headers: {"Content-type": "application/json; charset=utf-8" },
        body:JSON.stringify(data)
    }
    fetch(url,opciones)
    .then(respuesta=>(respuesta.ok)?respuesta.json():Promise.reject(respuesta))
    .then(json =>fsuccess(json))
    .catch(error=>ferror({status:error.status,statusText:error.statusText || "Ocurrió un error"}))
}

function rellenarDatosAlumnos(ciclo){
    ajax({
        url:"http://localhost:3000/alumnos",
        method:"GET",
        fsuccess:(datos)=>{
            //console.log(datos.alumnos)
            let alumnos=[]
            datos.forEach(alumno=>{
                if (alumno.ciclo==ciclo){
                    alumnos.push(alumno)
                }
            })
            
            renderAlumnos(alumnos)
        },
        ferror:(error)=>{error.status,alert(error.statusText)}
    })
    
}

function borrarAlumnos(id){
    ajax({url:`http://localhost:3000/alumnos/${id}`,
        method:"DELETE",
        fsuccess:(datos)=>{
           //alert("registro borrado")
           rellenarDatosAlumnos(ciclo2)
        },
        ferror:(error)=>{error.status,alert(error.statusText)}
    })
    
}


function renderAlumnos(alumnos) {
    //console.log(alumnos)
    let cabecera=$d.querySelector("#listado-datos")
    if(!cabecera){
        inicio=$tCabecera.cloneNode(true)
        $main.appendChild(inicio)
        cabecera=$d.querySelector("#listado-datos")
    }
    cabecera.innerHTML=""
    //creacion del id listado-datos
    let clon=$tCabecera.cloneNode(true)
    let head=clon.querySelector("#listado-datos")

    //creacion del id body-datos
    let clon2=$tDatos.cloneNode(true)
    let body=clon2.querySelector("#body-datos")
    
    //selecciona id items
    let item=clon2.querySelector("#td-body")

    //selecciona id del pie
    let pie=clon2.querySelector("#td-pie")

    //creacion del class item y añado al body-datos
    alumnos.forEach(e => {
        let clon3=$tItem.cloneNode(true)
        let p=clon3.querySelector("p")
        let change=clon3.querySelector(".fa-undo-alt")
        let del=clon3.querySelector(".fa-trash")
        change.dataset.id=e.id
        del.dataset.id=e.id
        p.append(e.nombre)
        item.appendChild(clon3)
    })
    //añade los items y el pie al body
    body.appendChild(item)
    body.appendChild(pie)
    //añade el body-datos al listado-datos
    head.appendChild(body)
    //reemplaza el elemento en main
    $main.replaceChild(head,cabecera)
    //borrado
    body.addEventListener("click",e=>{
        e.preventDefault()
        //e.stopPropagation()
        $form.ciclos.disabled=true 
        //console.log(e.target.classList)
        if (e.target.classList.contains("fa-trash")){
            //console.log(e.target.dataset.id)
            borrarAlumnos(e.target.dataset.id)
        }
    })
}

document.addEventListener("DOMContentLoaded",e=>{
    ajax({url:"http://localhost:3000/db",
        method:"GET",
        fsuccess:(datos)=>{
            const inicial=$d.createElement("option")
            console.log("recarga")
            inicial.setAttribute("value",0)
            inicial.append("Elige un ciclo.........")
            $select.appendChild(inicial)
            datos.ciclos.forEach(registro=>{
                let op=$d.createElement("option")
                op.setAttribute("value",registro.id)
                op.append(registro.ciclo)
                //console.log(op)
                $select.appendChild(op)
            })  
        },
        ferror:(error)=>{error.status,alert(error.statusText)}
        })
})

$select.addEventListener("change",e=>{
    //console.log(e.target.value)
    if (e.target.value==0){
        alert("Selecciona un ciclo válido")
    }else{
        ciclo2=e.target.value
        rellenarDatosAlumnos(e.target.value)
    }
})

