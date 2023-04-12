const formulario=document.querySelector('form')
const nifCtl=formulario.nif
const nombreCtl=formulario.nombre
const sexoCtl=document.getElementsByName("sexo")
const direccionCtl=formulario.direccion
const fnacCtl=formulario.fnac
const selectCtl=document.querySelector("select")
const telefonoCtl=formulario.telefono
const emailCtl=formulario.email
const aficionCtl=formulario.aficion
const otraCtl=formulario.otra
const tbody=document.querySelector("tbody")

const btnAdd=document.querySelector("button")

let registros=[]
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

function rellenarDatosFormulario(registro){
    nifCtl.disabled=true
    nombreCtl.value=registro.nombre
    if (registro.sexo=="H")
        sexoCtl[0].checked=true
    else
        sexoCtl[1].checked=true
    direccionCtl.value=registro.direccion
    fnacCtl.value=registro.fnac
    switch (registro.estudios) {
        case "Sin estudios": selectCtl.value=0
        case "ESO":selectCtl.value=1
        case "Bachillerato":selectCtl.value=2
        case "CM FP":selectCtl.value=3
        case "CS FP":selectCtl.value=4
        case "Universidad":selectCtl.value=5
    }
    telefonoCtl.value=registro.telefono
    emailCtl.value=registro.email

    aficionCtl[0].checked=false
    aficionCtl[1].checked=false
    aficionCtl[2].checked=false
    otraCtl.value=""
    if (registro.aficiones) {
        registro.aficiones.split(";").forEach(aficion=>{
            switch (aficion) {
                case "Cine": aficionCtl[0].checked=true
                             break
                case "Lectura": aficionCtl[1].checked=true
                                break
                case "Deporte": aficionCtl[2].checked=true
                                break
                default: otra.value=aficion
            }
        })
    }
}

function addRegistro() {
    if (sexoCtl[0].checked)
        sexo="H"
    else
        sexo="M"

    let aficiones=[]
    if (aficionCtl[0].checked)
        aficiones.push("Cine")
    if (aficionCtl[1].checked)
        aficiones.push("Lectura")
    if (aficionCtl[2].checked)
        aficiones.push("Deporte")
    if (otra.value)
        aficiones.push(otra.value)
    const registro={
        nif:nifCtl.value,
        nombre:nombreCtl.value,
        direccion:direccionCtl.value,
        sexo,
        fnac:fnacCtl.value,
        estudios:selectCtl.value,
        telefono:telefonoCtl.value,
        email:emailCtl.value,
        aficiones:aficiones.join(";")
    }
    ajax({url:"http://localhost:3000/datosAlumnos",
        method:"POST",
        fsuccess:(res)=>{
            formulario.reset()
        },
        ferror:(error)=>{error.status,error.statusText},
        data:registro
    })
    //registros.push(registro)
    sessionStorage.setItem("registros",JSON.stringify(registros))

    enableCtl(true)
}

function actualiceRegistro() {
    coincidencia=registros.find(registro=>registro.nif==nifCtl.value)
    if (sexoCtl[0].checked)
        sexo="H"
    else
        sexo="M"

    let aficiones=[]
    if (aficionCtl[0].checked)
        aficiones.push("Cine")
    if (aficionCtl[1].checked)
        aficiones.push("Lectura")
    if (aficionCtl[2].checked)
        aficiones.push("Deporte")
    if (otra.value)
        aficiones.push(otra.value)

    coincidencia.nombre=nombreCtl.value
    coincidencia.direccion=direccionCtl.value
    coincidencia.sexo=sexo
    coincidencia.fnac=fnacCtl.value
    coincidencia.estudios=selectCtl.value
    coincidencia.telefono=telefonoCtl.value
    coincidencia.email=emailCtl.value;
    coincidencia.aficiones=aficiones.join(";")

    sessionStorage.setItem("registros",JSON.stringify(registros))
}

function renderRegistros() {
    tbody.innerHTML=""
    const templateFila=document.querySelector("#template-fila").content
    registros.forEach(registro=>{
        fila=templateFila.cloneNode(true)
        datos=fila.querySelectorAll("td")
        datos[0].textContent=registro.nif
        datos[1].textContent=registro.nombre
        datos[2].textContent=registro.sexo
        datos[3].textContent=registro.direccion
        datos[4].textContent=registro.fnac
        switch (registro.estudios) {
            case "0":datos[5].textContent="Sin estudios"
                     break
            case "1":datos[5].textContent="ESO"
                     break
            case "2":datos[5].textContent="Bachillerato"
                     break
            case "3":datos[5].textContent="CM FP"
                     break
            case "4":datos[5].textContent="CS FP"
                     break
            case "5":datos[5].textContent="Universidad"
        }
        datos[6].textContent=registro.telefono
        datos[7].textContent=registro.email
        datos[8].textContent=registro.aficiones
        datos[9].querySelector("a").dataset.id=registro.nif
        tbody.appendChild(fila)
    })
    const nRegistros=document.querySelector("tfoot tr th:last-child")
    nRegistros.textContent=registros.length
}

function checkNIF(){
    const expresion=/^[0-9]{8}\-[a-z,A-Z]{1}$/;
    console.log(expresion.test(nifCtl.value))
    return nifCtl.value!=""&&expresion.test(nifCtl.value)
}

function checkNombre(){
    return nombreCtl.value!=""
}

function checkTelefono(){
    return telefonoCtl.value!=""
}

function checkEmail() {
    return emailCtl.value!=""
}

function comprobar() {
    return checkNIF()&&checkNombre()&&checkTelefono&&checkEmail()
}

formulario.addEventListener("submit",e=>{
    e.preventDefault()
    if (comprobar()){
        const coincidencia=registros.find(registro=>registro.nif==nifCtl.value)
        if (coincidencia) {
            nifCtl.disabled=true
            actualiceRegistro()
            renderRegistros()
            formulario.reset()
            inicializarFormulario(true)
        } else {
            addRegistro()
            renderRegistros()    
            formulario.reset()
            inicializarFormulario(true)
        }
    } else {
        alert("Faltan datos por cubrir")
    }
})

nifCtl.addEventListener("blur",evento=>{
    if (checkNIF()) {
        enableCtl(false)
        coincidencia=registros.find(registro=>registro.nif==nifCtl.value)
        if (coincidencia) {
            alert("Se cargan los datos existentes")
            rellenarDatosFormulario(coincidencia)
            enableCtl(false)
        } else
            inicializarFormulario()
    }
})

function enableCtl(permitir) {
    controles=formulario.querySelectorAll("input").forEach(ctrl=>ctrl.disabled=permitir)
    selectCtl.disabled=permitir
    nifCtl.disabled=!permitir
    nifCtl.focus()      
}

function inicializarFormulario(permitir){   
    sexoCtl[0].checked=true
    fnacCtl.value="1972-05-17"
    enableCtl(permitir)
}

tbody.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.textContent=="X") {
        registros.splice(registros.findIndex(registro=>registro.nif==e.target.dataset.id),1)
        sessionStorage.setItem("registros",JSON.stringify(registros))
        renderRegistros()  
        formulario.reset()
        inicializarFormulario(true)
    }
})

document.addEventListener("DOMContentLoaded",e=>{
    registrosSession=sessionStorage.getItem("registros")
    if (registrosSession) {
        registros=JSON.parse(registrosSession)
        renderRegistros()
    }
    inicializarFormulario(true)
})