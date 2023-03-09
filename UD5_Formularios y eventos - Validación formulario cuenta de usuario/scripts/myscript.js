const $d=document,
    $formulario=$d.querySelector("#formulario"),
    $boton=$d.querySelector("button")



$formulario.addEventListener("click",e=>{
    e.preventDefault()
    
    if(e.target.textContent=="Enviar"){
        let user=$d.querySelector("#usuario")
        let email=$d.querySelector("#email")
        let pass=$d.querySelector("#pass")
        let passConf=$d.querySelector("#usuario")
        if (user.value==""){
            user.setAttribute("class","falla")
        // } || email.value=="" || pass.value=="" || passConf.value==""){
            

        }



    }
})