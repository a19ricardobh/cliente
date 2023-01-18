const $d=document,
    $add=$d.querySelector("#addCarta"),
    $del=$d.querySelector("#delCarta"),
    $figuras=$d.querySelector("#figuras"),
    $nCartas=$d.querySelector("#ncartas"),
    $realizar=$d.querySelector("#btnOperar"),
    $radio=$d.getElementsByName("operacion")

    
    $palo=$d.querySelector("#palo")
    //console.log($palo)
    //console.log($palo.options[$palo.selectedIndex].value)
    //console.log($palo.value)
    $numero=$d.querySelector("#numero")
    //console.log($numero.value)

let cartas=[]

function imprime(cartas){
    $figuras.innerHTML=""
    $nCartas.innerHTML=""
    let $fragImg = $d.createDocumentFragment()
    let $fragSelect=$d.createDocumentFragment()
    cartas.forEach((el,i) => {
        //imagenes
        let $img=$d.createElement("img")
        $img.setAttribute("src",`imagenes/${el}.png`)
        $fragImg.appendChild($img)
        //select
        let $option=$d.createElement("option")
        $option.setAttribute("value",i+1)
        let texto =$d.createTextNode(i+1)
        $option.appendChild(texto)
        $fragSelect.appendChild($option)

    });
    $figuras.appendChild($fragImg)
    $nCartas.appendChild($fragSelect)
   
}


function addCarta(e){
    e.preventDefault()   
    let carta=`${$palo.value}${$numero.value}`

    if (cartas.includes(carta)){
        alert("La carta ya existe")
    }else{
        cartas.push(carta)
    }
    imprime(cartas)
}    

function borraCarta(e){
    e.preventDefault()   
    let del=`${$palo.value}${$numero.value}`
    if (cartas.includes(del)){
        cartas.splice(cartas.indexOf(del),1)
    }else{
        alert("La carta no está en la mesa")
    }
    imprime(cartas)
}

function sustituirCarta(carta,posicion){

    if (cartas.includes(carta)){
        alert("La carta ya está, no se puede sustituir")
    }else{
        cartas.splice(posicion-1,1,carta)
    }
    imprime(cartas)
}

function insertarCarta(carta,posicion){

    if (cartas.includes(carta)){
        alert("La carta ya está, no se puede insertar")
    }else{
        cartas.splice(posicion-1,0,carta)
    }
    imprime(cartas)
}

$add.addEventListener("click",addCarta)
$del.addEventListener("click",borraCarta)

$realizar.addEventListener("click",(e)=>{
    e.preventDefault() 
    let s=`${$palo.value}${$numero.value}`
    if ($radio[0].checked){
        insertarCarta(s,$nCartas.value)
    }else{
        sustituirCarta(s,$nCartas.value)
    }
})
