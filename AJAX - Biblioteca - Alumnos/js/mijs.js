const $d=document,
    $form=$d.querySelector("form"),
    nifCtl=$form.nif,
    $tTabla=$d.querySelector("#template-tabla").content,
    $tFila=$d.querySelector("#template-row").content


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

function checkNIF(){
    const expresion=/^[0-9]{8}\-[a-z,A-Z]{1}$/;
    //console.log(expresion.test(nifCtl.value))
    return nifCtl.value!=""&&expresion.test(nifCtl.value)
}

function rellenarFormulario(socio){
    $form.nombre.value=socio.nombre
    $form.apellidos.value=socio.apellidos
    $form.domicilio.value=socio.domicilio
    $form.poblacion.value=socio.poblacion
    $form.provincia.value=socio.provincia
    $form.email.value=socio.email
    //añadir boton 
    let boton=$d.createElement("button")
    boton.append("Mostrar libros prestados")
    boton.setAttribute("class","oculto")
    $form.querySelectorAll("fieldset")[1].appendChild(boton)
    boton.addEventListener("click",e=>{
        e.preventDefault()
        console.log(socio.id)
        mostrarLibros(socio.id)

    })
}

function mostrarLibros(socio){
    ajax({url:`http://localhost:3000/prestamos?socioId=${socio}&_expand=libro`,
        method:"GET",
        fsuccess:(datos)=>{
            let clon=$tTabla.cloneNode(true)
            let linea=clon.querySelector("tbody")
            datos.forEach(el => {
                let clon2=$tFila.cloneNode(true)
                let fila=clon2.querySelectorAll("td")
                fila[0].textContent=el.libro.titulo
                fila[1].textContent=el.libro.autor
                fila[2].textContent=el.libro.editorial
                fila[3].textContent=el.libro.genero
                fila[4].textContent=el.libro.paginas
                fila[5].textContent=el.libro.fechEdicion
                linea.appendChild(clon2)
            });
            clon.appendChild(linea)
            $form.querySelectorAll("fieldset")[1].appendChild(clon)
        },
        ferror:(error)=>{error.status,error.statusText}
        }) 
    

}

//
nifCtl.addEventListener("blur",e=>{
    //console.log(e)
    let existe=false
    if (checkNIF()){
        ajax({url:"http://localhost:3000/socios",
        method:"GET",
        fsuccess:(socios)=>{
            socios.forEach(registro=>{
                if(registro.nif==nifCtl.value){
                    existe=true
                    //alert("Se cargan los datos existentes")
                    //console.log(registro)
                    rellenarFormulario(registro)
                    //enableCtl(false)
                }
            })
            if (!existe){
                //altaSocio()
            }
        },
        ferror:(error)=>{error.status,error.statusText}
        }) 
    }
})

