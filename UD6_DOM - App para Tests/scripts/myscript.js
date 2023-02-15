const preguntas=[
    {
        pregunta:"¿quien es?",
        respuestas: ["el","yo","tu"],
        correcta:0
    },
    {
        pregunta:"Capital de España",
        respuestas: [ "Paris","Bruselas","Madrid","Teruel"],
        correcta: 2
    },
    {
        pregunta:"Color que no está en la bandera de Francia",
        respuestas: [ "Blanco","Negro","Rojo","Azul"],
        correcta: 1
    },
    {
        pregunta:"¿por donde sale el sol?",
        respuestas: ["Norte","Este","Oeste","Sur"],
        correcta: 1
    },
    {
        pregunta:"¿y por donde se pone?",
        respuestas: [ "Ocaso","Norte","Sur","Oeste"],
        correcta: 3
    }
]

const   $d=document,
        $contenedor=$d.querySelector("#test"),
        $pregunta=$d.querySelector("#pregunta"),
        // $respuesta=$d.querySelectorAll(".respuesta"),
        $ul=$d.querySelector("ul"),
        $id=$d.querySelector("#submit"),
        $template=$d.querySelector("#template-final").content,
        $temResp=$d.querySelector("#template-respuesta").content

let prActual=0,
    suma=0

function render(pregunta){
    $ul.innerHTML=""
    $pregunta.innerHTML=pregunta.pregunta
    let id=97
    pregunta.respuestas.forEach(e => {
        const $clon=$temResp.cloneNode(true)
        let input=$clon.querySelector("input")
        input.id=String.fromCharCode(id)
        let label=$clon.querySelector("label")
        label.setAttribute("for",String.fromCharCode(id))
        label.id=String.fromCharCode(id)
        label.textContent=e
        $ul.appendChild($clon)
        id++
    });
    
}

function finRender(){
    $contenedor.innerHTML=""
    /* let a=$d.createElement("h2")
    // a.innerHTML="hola"
    let texto="Has acertado "+suma+"/"+preguntas.length+" preguntas correctamente"
    a.append(texto)
    let b=$d.createElement("button")
    
    b.append("Repetir !!")
    $contenedor.append(a,b) */
    const $clone=$template.cloneNode(true)
    let texto="Has acertado "+suma+"/"+preguntas.length+" preguntas correctamente"
    let h2=$clone.querySelector("h2")

    h2.textContent=texto
    
    $contenedor.appendChild($clone)
}

$d.addEventListener("DOMContentLoaded",e=>{
    render(preguntas[0])
})

$id.addEventListener("click",e=>{
    e.preventDefault()
    const $respuesta=$d.querySelectorAll(".respuesta")
    $respuesta.forEach((element,indice) => {
        if(element.checked){
            if (preguntas[prActual].correcta==indice){
                suma++
            }
            prActual++
            if(prActual<preguntas.length){
                render(preguntas[prActual])
            }else{
                finRender()
            }  
        }
    });
})

const $repetir=$d.querySelector("#repite")

$repetir.addEventListener("click",e=>{
    e.preventDefault()
    prActual=0,
    suma=0
    render(preguntas[0])
})

