const $d=document,
    $formulario=$d.querySelector("#formulario"),
    $boton=$d.querySelector("button")

const expRegNom=/[a-z]+/i


$formulario.addEventListener("click",e=>{
    e.preventDefault()
    
    if(e.target.textContent=="Enviar"){
        let user=$d.querySelector("#usuario")
        let email=$d.querySelector("#email")
        let pass=$d.querySelector("#pass")
        let passConf=$d.querySelector("#usuario")
        if (!expRegNom.test(user.value) ){
            if(!user.parentElement.className.includes("falla")){
                user.parentElement.setAttribute("class","form-control falla")
                user.nextElementSibling.append("Campo vacío")
            }
        }else{
            user.parentElement.setAttribute("class","form-control ok")
            user.nextElementSibling.innerHTML=""
        }
        if (email.value==""){
            if(!email.parentElement.className.includes("falla")){
                email.parentElement.setAttribute("class","form-control falla")
                email.nextElementSibling.append("Campo vacío")
            } 
        }else{
            email.parentElement.setAttribute("class","form-control ok")
            email.nextElementSibling.innerHTML=""
        }
        // }  pass.value=="" || passConf.value==""){
            

        



    }
})