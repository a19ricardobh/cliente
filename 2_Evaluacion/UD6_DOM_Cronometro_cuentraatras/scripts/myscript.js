const $d=document,
        $segundos=$d.querySelector(".valor.segundos"),
        $minutos=$d.querySelector(".valor.minutos"),
        $horas=$d.querySelector(".valor.horas"),

        $contenedorBtn=$d.querySelector(".button-contenedor")

function rellenar(num,$elDOM){
    const vector=Array.from({length:num},(el,indice)=>indice.toString().padStart(2,"0"))
    vector.forEach(el=>{
        const opcion=$d.createElement("option")
        //const texto=$d.createTextNode(el)
        //opcion.appendChild(texto)
        opcion.append(el) //se sustituye por las dos anteriores porque es un texto
        opcion.setAttribute("value",el)
        $elDOM.appendChild(opcion)
    })
}

rellenar(24,$horas)
rellenar(60,$minutos)
rellenar(60,$segundos)

/*        let seg=0,min=0,hor=0
        let id=null

function incrementar(){
    
    seg++
    $segundos.innerHTML=seg.toString().padStart(2,"0")
    if (seg==60){
        seg=0
        min++
        $minutos.innerHTML=min.toString().padStart(2,"0")
    }
    if (min==60){
        min=0
        hor++
        $horas.innerHTML=hor.toString().padStart(2,"0")
    }
    
}*/



/*** Hecho con Id en vez de clases */

let segundos=$segundos.firstElementChild.textContent,
    minutos=0,
    horas=0
console.log($segundos.selectedOptions[0].value)
let cronometro=null

function contar(){
    segundos--
    if (segundos==60){
        minutos--
        segundos=0
    }
    if(minutos==60){
        horas--
        minutos=0
    }
    $segundos.innerHTML=seg.toString().padStart(2,"0")
    $minutos.innerHTML=min.toString().padStart(2,"0")
    $horas.innerHTML=hor.toString().padStart(2,"0")

}

$contenedorBtn.addEventListener("click",e=>{
    switch (e.target.id) {
        case "start":
            if (!cronometro){
                cronometro=setInterval(contar,1000)
                e.target.textcontent="Stop"
            }else{
                clearInterval(cronometro)
                cronometro=null
                e.target.textContent="Continue"
            }
            break;
    
        case "reset":
            clearInterval(cronometro)
            cronometro=null
            e.target.nextElementSibling.textContent="Start"
            horas=minutos=segundos=0
            $segundos.innerHTML="00"
            $minutos.innerHTML="00"
            $horas.innerHTML="00"  
        }
})
