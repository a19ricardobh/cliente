const $d=document,
    $tabla=$d.querySelector("tbody"),
    $form=$d.querySelector("form"),
    $boton=$d.querySelector("button"),
    $template=$d.querySelector("#template-alumno").content
let modUser=0

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

function render(datos) {
    $tabla.innerHTML=""
    
    datos.forEach(e => {
        let clon=$template.cloneNode(true)
        let filas=clon.querySelectorAll("td")
        filas[1].textContent=e.nombre
        filas[2].textContent=e.apellidos
        filas[3].textContent=e.nif
        filas[4].textContent=e.email
        filas[0].dataset.id=e.id
        $tabla.appendChild(clon)
    });
}

function cargaUsuarios(){
    ajax({url:`http://localhost:3000/usuarios`,
        method:"GET",
        fsuccess:(datos)=>{
            //console.log(datos)
            render(datos)
        },
        ferror:(error)=>console.log(error)
    }) 
}

function altaUsuario(){
    const all=$form.querySelectorAll("input")
    const user={nombre: all[0].value,
                apellidos: all[1].value,
                nif: all[2].value,
                email: all[3].value
        }
        ajax({url:`http://localhost:3000/usuarios`,
        method:"POST",
        fsuccess:(datos)=>{
            $form.reset()
            location.reload()
        },
        ferror:(error)=>console.log(error),
        data:user
    }) 
}

function delUsuario(user){
    
        ajax({url:`http://localhost:3000/usuarios/${user}`,
        method:"DELETE",
        fsuccess:(datos)=>{
            alert("Elemento borrado")
            location.reload()
        },
        ferror:(error)=>console.log(error)
    }) 
}

function modUsuario(u){
    const all=$form.querySelectorAll("input")
    const user={nombre: all[0].value,
                apellidos: all[1].value,
                nif: all[2].value,
                email: all[3].value
        }
        ajax({url:`http://localhost:3000/usuarios/${u}`,
        method:"PUT",
        fsuccess:(datos)=>{
            $form.reset()
            location.reload()
        },
        ferror:(error)=>console.log(error),
        data:user
    }) 
}

function rellenaForm(user){
    //recupera usuario del servidor
    ajax({url:`http://localhost:3000/usuarios/${user}`,
        method:"GET",
        fsuccess:(datos)=>{
            //let campos=$form.querySelectorAll("input")
            $form.nome.value=datos.nombre
            $form.apelido.value=datos.apellidos
            $form.dni.value=datos.nif
            $form.email.value=datos.email

            modUser=datos.id

            $boton.innerHTML=""
            $boton.innerHTML="Actualizar"

            let enlaces=$tabla.querySelectorAll("i")
            //console.log(enlaces)
            enlaces.forEach(e => {
                e.classList.toggle("off")
            });
        },
        ferror:(error)=>console.log(error)
    }) 
    
}

//cuando se carge el documento, carga los usuarios
$d.addEventListener("DOMContentLoaded",cargaUsuarios)

$form.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.classList.contains("btn")){
        if(e.target.textContent=="Actualizar"){
            modUsuario(modUser)
        }else{
            altaUsuario()
        }
    }
    if (e.target.classList.contains("fa-trash")){
        if (!e.target.classList.contains("off"))
            delUsuario(e.target.parentElement.dataset.id)
    }
    if (e.target.classList.contains("fa-undo-alt")){
        if (!e.target.classList.contains("off"))
            rellenaForm(e.target.parentElement.dataset.id)
    }
})