const $d=document,
    $boton=$d.querySelector(".btn"),
    $error=$d.querySelector("#error"),
    $formulario=$d.querySelector("#myform")

function darError(n){
    let e=$d.createElement("p") 
    if (n==1){
       e.append("Nombre incorrecto")
    }
    if (n==2){
        e.append("Telefono incorrecto")
    }
    if (n==3){
        e.append("Email erroneo")
    }
    if (n==4){
        e.append("Asunto no valido")
    }
    if (n==5){
        e.append("Comentarios vacios")
    }

    $error.appendChild(e)
    $error.style.backgroundColor="red"

    setTimeout(()=>{$error.removeChild(e)
       $error.style.backgroundColor="white" },2000)
    
}


$formulario.addEventListener("submit",e=>{
    e.preventDefault()
   
    let nombre=$d.querySelector("#name")
    let phone=$d.querySelector("#phone")
    let email=$d.querySelector("#email")
    let subj=$d.querySelector("#subject")
    let mensaje=$d.querySelector("#message")
    

    if (nombre.value==""){
        darError(1)
    }else if (phone.value==""){
        darError(2)
    }else if (email.value==""){
        darError(3)
    }else if (subj.value==""){
        darError(4)
    }else if (mensaje.value==""){
        darError(5)
    }else{
        alert("Datos enviados correctamente")
    }
    
})