const $d=document,
    $formulario=$d.querySelector("#formulario"),
    $boton=$d.querySelector("button")

const expRegNom=/[a-z]+/i,
      expRegPas=/[a-z]+/i


$formulario.addEventListener("click",e=>{
    e.preventDefault()
    
    if(e.target.textContent=="Enviar"){
        let user=$d.querySelector("#usuario")
        let email=$d.querySelector("#email")
        let pass=$d.querySelector("#pass")
        let passConf=$d.querySelector("#usuario")
        //Validacion campo usuario
        if (!expRegNom.test(user.value) ){
            if(!user.parentElement.className.includes("falla")){
                user.parentElement.setAttribute("class","form-control falla")
                user.nextElementSibling.append("Campo vacío")
            }
        }else{
            user.parentElement.setAttribute("class","form-control ok")
            user.nextElementSibling.innerHTML=""
        }
        //validacion campo email
        if (email.value==""){
            if(!email.parentElement.className.includes("falla")){
                email.parentElement.setAttribute("class","form-control falla")
                email.nextElementSibling.append("Campo vacío")
            } 
        }else{
            email.parentElement.setAttribute("class","form-control ok")
            email.nextElementSibling.innerHTML=""
        }
        //Validacion del campo password
        if (!expRegPas.test(pass.value) ){
            if(!pass.parentElement.className.includes("falla")){
                pass.parentElement.setAttribute("class","form-control falla")
                pass.nextElementSibling.append("Campo vacío")
            }
        }else{
            pass.parentElement.setAttribute("class","form-control ok")
            pass.nextElementSibling.innerHTML=""
        }    

        //Validacion confirmacion del password
        if (pass.value!=""){
            if (passConf.value=="" || passConf.value!=pass.value){
                if(!passConf.parentElement.className.includes("falla")){
                    passConf.parentElement.setAttribute("class","form-control falla")
                    passConf.nextElementSibling.append("el password no concuerda")
                } 
            }else{
                    passConf.parentElement.setAttribute("class","form-control ok")
                    passConf.nextElementSibling.innerHTML=""
            }
        }
    }

})