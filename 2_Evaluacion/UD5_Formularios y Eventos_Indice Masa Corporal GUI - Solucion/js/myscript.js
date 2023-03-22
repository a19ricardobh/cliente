const   $d=document,
        $altura=$d.querySelector("#altura"),
        $peso=$d.querySelector("#peso"),
        $rdo=$d.querySelector("#resultados"),
        $submit=$d.querySelector("button")

$submit.addEventListener("click",event=>{
    event.preventDefault()
    let alt=$altura.value
    let peso=$peso.value
    let imc=peso/(alt*alt)
    $rdo.innerHTML=imc
})

/* $altura.addEventListener("focus",evento=>{
    evento.target.value=""
})

$altura.addEventListener("blur",evento=>{
    evento.target.value="10000"
}) */