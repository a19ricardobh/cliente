const   $d=document,
        $select=$d.querySelector("#ciclos"),
        $main=$d.querySelector("main"),
        inicio=$d.querySelector("#inicio"),
        $tCabecera=$d.querySelector("#template-listado-datos").content,
        $tDatos=$d.querySelector("#template-body-datos").content,
        $tItem=$d.querySelector("#template-item").content

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
    ajax({url:"http://localhost:3000/db",
        method:"GET",
        fsuccess:(datos)=>{
            //console.log(datos.alumnos)
            let alumnos=[]
            datos.alumnos.forEach(alumno=>{
                if (alumno.ciclo==ciclo){
                    alumnos.push(alumno)
                }
            })
            /* let clon=$tCabecera.cloneNode(true)
            $main.appendChild(clon) */
            renderAlumnos(alumnos)
        },
        ferror:(error)=>{error.status,alert(error.statusText)}
    })
    
}

function renderAlumnos(alumnos) {
    console.log(alumnos)
    inicio.innerHTML=""
    let clon=$tCabecera.cloneNode(true)
    
    //let main=$d.querySelector("#listado-datos")
    
    let clon2=$tDatos.cloneNode(true)
    let item=clon2.querySelector("#td-body")
    /* let clon3=$tItem.cloneNode(true)
    let p=clon3.querySelector("p")
    let change=clon3.querySelector(".fa-undo-alt")
    let del=clon3.querySelector(".fa-trash") */
    alumnos.forEach(e => {
        let clon3=$tItem.cloneNode(true)
        let p=clon3.querySelector("p")
        let change=clon3.querySelector(".fa-undo-alt")
        let del=clon3.querySelector(".fa-trash")
        change.dataset.id=e.id
        del.dataset.id=e.id
        p.append(e.nombre)
        item.appendChild(clon3)
        //clon2.appendChild(item)
    })
    //item.appendChild(clon3)
    clon2.appendChild(item)
    main.appendChild(clon2)
    clon.appendChild(main)
    inicio.appendChild(clon)
}

document.addEventListener("DOMContentLoaded",e=>{
    ajax({url:"http://localhost:3000/db",
        method:"GET",
        fsuccess:(datos)=>{
            const inicial=$d.createElement("option")
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
        rellenarDatosAlumnos(e.target.value)
    }
})