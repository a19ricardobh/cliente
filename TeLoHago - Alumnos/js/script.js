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
    $localidad=$d.querySelector("#localidad"),
    $formulario=$d.querySelector("form"),
    $viaPago=$d.querySelector("#efectivo")

    const tarifas={
        perro:2,
        hijo:5,
        coche:{
            itv:2,
            taller:2,
            lavar:3
        },
        localidad: {
            Santiago:0,
            Negreira:2,
            Silleda:2,
            Lalín:3
        },
        finDeSemana:5,
        efectivo:0.8
    }

function calculoPrecio(dia){
    let precio=0
    //precios base
    precio += $perros.value*tarifas.perro
    precio +=$hijos.value*tarifas.hijo
    if (!$coches.value==0){
        if ($itv.checked){
            precio +=$coches.value*tarifas.coche.itv
        }
        if ($taller.checked){
            precio +=$coches.value*2
        }
        if ($lavado.checked){
            precio +=$coches.value*3
        }
    }

    //cargo fin de semana
    if (dia==0 || dia==6){
        precio +=5
    }

    return precio
}


//inicio
$d.addEventListener("DOMContentLoaded",e=>{
    if($coches.value==0){
        $itv.setAttribute("disabled", "disabled")
        $taller.setAttribute("disabled","disabled")
        $lavado.setAttribute("disabled", "disabled")
    }
})

//calculo del precio
$formulario.addEventListener("change",(e)=>{
    
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
    
    let dia=new Date($fecha.value)
    let p=1
    if ($viaPago.checked){
        p=0.8
    }
    $valor.innerHTML=((calculoPrecio(dia.getDay())+tarifas.localidad[$localidad.options[$localidad.selectedIndex].innerText])*p).toFixed(2)

})

//validaciones
$formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const $nif=$formulario.querySelector("#nif"),
        $tlf=$formulario.querySelector("#tfno"),
        $name=$formulario.querySelector("#nombre")

    const expRegNif=/^\d{8}-[a-z]{1}$/i
    
    const expRegTlf=/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/
    //console.log(expRegTlf.test($tlf.value))
    const expRegNom=/[a-z][ ]/i
    console.log(expRegNom.test($name.value))
    if (expRegNif.test($nif.value) && expRegTlf.test($tlf.value) && expRegNom.test($name.value)){
        alert("// se envían los datos.")
    }
})