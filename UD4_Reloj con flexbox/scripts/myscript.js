const $d=document,
    $segundos=$d.querySelector("#segundo"),
    $minutos=$d.querySelector("#minuto"),
    $horas=$d.querySelector("#hora"),
    $contenedor=$d.querySelector("#contenedor")



let segundos=0,
    minutos=0,
    horas=0
let crono=null

function reloj(){
    segundos++
    if (segundos==60){
        minutos++
        segundos=0
    }
    if(minutos==60){
        horas++
        minutos=0
    }
    if (horas==24){
        segundos=0
        minutos=0
        horas=0
    }
    $segundos.innerHTML=segundos.toString().padStart(2,"0")
    $minutos.innerHTML=minutos.toString().padStart(2,"0")
    $horas.innerHTML=horas.toString().padStart(2,"0")

}

$contenedor.addEventListener("click",e=>{
    console.log(e.target.textContent)
    if(e.target.textContent==0){
        crono=setInterval(reloj,1000)
    }else{
        clearInterval(crono) 
        $segundos.innerHTML="00"
        $minutos.innerHTML="00"
        $horas.innerHTML="00"
    }
})

   

