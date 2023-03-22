const MAY=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const MIN=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const NUM="0123456789".split("")
const SIMB=["#","@","?","=",".","_"]

function aleatorio(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function calculaContraseña(long,may,min,num,si){
    let casos=[]
    let password=""
    //array de casos posibles
    if (may){
        casos.push(MAY)
    }
    if (min){
        casos.push(MIN)
    }
    if (num){
        casos.push(NUM)
    }
    if (si){
        casos.push(SIMB)
    }
    
    for(let i=0;i<long;i++){
        //tipo de valor a incluir
        let array=casos[aleatorio(0,casos.length-1)]
        //contraseña
        password+=array[aleatorio(0,array.length-1)]
        /* otra forma de hacerlo
        password+=casos[i%casos.length][aleatorio(0,array.length-1)]
        0 1 2 3 4 5 6 7 8
        0 1 2 0 1 2 0 1 2 ->resto
        despues, reorganizarlo en un string nuevo de forma aleatoria */
    }
    return password
}

//console.log(calculaContraseña(12,true,true,false,true))
const $d=document,
    $resultado=$d.querySelector("#resultado"),
    $longitud=$d.querySelector("#longitud"),
    $may=$d.querySelector("#mayusculas"),
    $min=$d.querySelector("#minusculas"),
    $num=$d.querySelector("#numeros"),
    $simbol=$d.querySelector("#simbolos"),
    $genera=$d.querySelector("#generar"),
    $clipboard=$d.querySelector("#portapapeles")


    //console.log($longitud.value)
    //console.log($simbol.checked)
$genera.addEventListener("click",(e)=>{
    e.preventDefault()
    $resultado.innerHTML=calculaContraseña($longitud.value,$may.checked,$min.checked,$num.checked,$simbol.checked)
})

$clipboard.addEventListener("click",(e)=>{
    navigator.clipboard.writeText($resultado.textContent)
})
