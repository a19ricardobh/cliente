const   $d=document,
        $template=$d.querySelector("#resultado").content,
        $div=$d.querySelector("#insertar")

function render(key,kCode,code){
    $div.innerHTML=""
    let $clon=$template.cloneNode(true)
    let $teclas=$clon.querySelectorAll(".tecla")
    console.log($teclas)
    $teclas[0].querySelector("small").innerHTML=key
    $teclas[1].querySelector("small").innerHTML=kCode
    $teclas[2].querySelector("small").innerHTML=code
    $div.appendChild($clon)
}

$d.addEventListener("keydown",event=>{
    event.preventDefault()
    render(event.key,event.keyCode,event.code)
})

