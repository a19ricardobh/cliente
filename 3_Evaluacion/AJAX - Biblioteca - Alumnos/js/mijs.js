const $d=document,
    $form=$d.querySelector("form"),
    form=["nombre","apellidos","domicilio","poblacion","provincia","email"],
    nifCtl=$form.nif,
    $input=$d.querySelector("#enviar"),
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
        //console.log(e.target.classList.contains("oculto"))
        if (e.target.classList.contains("oculto")){
            mostrarLibros(socio.id)
            boton.setAttribute("class","visible")
            boton.innerHTML="Ocultar libros prestados"
        }else{
            $d.querySelector("table").remove()
            boton.setAttribute("class","oculto")
            boton.innerHTML="Mostrar libros prestados"
        }
        

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
                filaCompleta=clon2.querySelector("tr")
                linea.appendChild(filaCompleta)
            });
            //console.log(linea)
            let tabla=clon.querySelector("table")
            tabla.appendChild(linea)
            //console.log(clon)
            $form.querySelectorAll("fieldset")[1].appendChild(tabla)
        },
        ferror:(error)=>{error.status,error.statusText}
        }) 
    

}

function altaSocio(){
    ajax({
        url: "http://localhost:3000/socios",
        method: "POST",
        fsuccess: (res) => {
          $form.reset();
          location.reload();
          alert("Incluido con exito")
        },
        ferror: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nif: $form.nif.value,
          nombre: $form.nombre.value,
          apellidos: $form.apellidos.value,
          domicilio:$form.domicilio.value,
          poblacion:$form.poblacion.value,
          provincia:$form.provincia.value,
          email: $form.email.value,
        },
      });
}

function modificaSocio(socio){
    ajax({
        url: `http://localhost:3000/socios/${socio.nif.dataset.id}`,
        method: "PUT",
        fsuccess: (res) => {
          $form.reset();
          location.reload();
          alert("Modificado registro")
        },
        ferror: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nif: socio.nif.value,
          nombre: socio.nombre.value,
          apellidos: socio.apellidos.value,
          domicilio: socio.domicilio.value,
          poblacion: socio.poblacion.value,
          provincia: socio.provincia.value,
          email: socio.email.value,
        },
      });
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
                    $input.setAttribute("value","Actualizar")

                }
            })
            if (!existe){
                $input.setAttribute("value","Alta")
                //altaSocio()
            }
        },
        ferror:(error)=>{error.status,error.statusText}
        }) 
    }
})

//evento submit
$form.addEventListener("submit",e=>{
    e.preventDefault()
    //console.log(e.submitter.value)
    if (e.submitter.value=="Alta"){        
        if (form.every(name=>$form[name].value!=""))
            altaSocio()
    }
    if (e.submitter.value=="Actualizar"){
 	    modificaSocio(e.target.elements)
    }
})
