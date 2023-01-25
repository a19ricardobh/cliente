const $d=document,
    $perros=$d.querySelector("#canes"),
    $hijos=$d.querySelector("#hijos"),
    $coches=$d.querySelector("#coches"),
    $itv=$d.querySelector("#itv"),
    $taller=$d.querySelector("#taller"),
    $lavado=$d.querySelector("#lavado"),
    $fecha=$d.querySelector("#fecha"),
    $datos=$d.querySelectorAll(".datos"),
    $valor=$d.querySelector("#cantidad"),
    $localidad=$d.querySelector("#localidad")

    console.log($localidad.selectedIndex)
const localidades=[0,2,2,3] //valores correspondientes al indice del option

/* 1 perro: 2 eur , 1 hijo 5 eur , coche: itv 2 eur, taller 2 eur y lavar 3 eur
Fin de semana recargo 5 eur */

/* $perros.addEventListener("change",(e)=>{
    e.stopPropagation(e)
        console.log(e)
})
$hijos.addEventListener("change",(e)=>{
    console.log(e)
}) */

function render(valor){
    $valor.innerHTML=valor
}

function calculoPrecio(){
    let precio=0
    //precios base
    precio += $perros.value*2
    precio +=$hijos.value*5
    if (!$coches.value==0){
        if ($itv.checked){
            precio +=$coches.value*2
        }
        if ($taller.checked){
            precio +=$coches.value*2
        }
        if ($lavado.checked){
            precio +=$coches.value*3
        }
    }
    //cargo por localidad

    
    return precio
}
//console.log($coches.value)
if($coches.value==0){
    $itv.setAttribute("disabled", "disabled")
    $taller.setAttribute("disabled","disabled")
    $lavado.setAttribute("disabled", "disabled")
}

$datos.forEach(element => {
    element.addEventListener("change",(e)=>{
        if (e.target.id=="coches"){
            if (e.target.value>0){
                $itv.removeAttribute("disabled")
                $taller.removeAttribute("disabled")
                $lavado.removeAttribute("disabled")
            }else{
                $itv.checked=false
                $taller.checked=false
                $lavado.checked=false
                $itv.setAttribute("disabled", "disabled")
                $taller.setAttribute("disabled","disabled")
                $lavado.setAttribute("disabled", "disabled")
            }
        }
        render(calculoPrecio())

    })
});


