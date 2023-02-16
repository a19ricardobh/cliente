const   $d=document,
        $form=$d.querySelector("form")
let     $temp1=$d.querySelector("#temp1"),
        $temp2=$d.querySelector("#temp2"),
        $out1=$d.querySelector("#out1"),
        $out2=$d.querySelector("#out2")


function convertirCelsius(f){
    return (f - 32) * (5 / 9)
}

function convertirFarenh(c){
    return (c  * (9 / 5) + 32) 
}

function cambioTemp(id,temp){
    if (id=="temp1"){
        let f=convertirFarenh(temp)
        if (f>100){
            $temp1.value=37.78
            $out1.innerHTML=$temp1.value
            $temp2.value=100
            $out2.innerHTML=$temp2.value
        }else{
            $temp1.value=temp
            $out1.innerHTML=$temp1.value
            $temp2.value=f
            $out2.innerHTML=$temp2.value
        }
    }
    if (id=="temp2"){
        let c=convertirCelsius(temp)
        if (c<0){
            $temp2.value=32
            $out2.innerHTML=$temp2.value
            $temp1.value=0
            $out1.innerHTML=$temp1.value
        }else{
            $temp2.value=temp
            $out2.innerHTML=$temp2.value
            $temp1.value=c
            $out1.innerHTML=$temp1.value
        }
    }
}

$d.addEventListener("DOMContentLoaded",e=>{
    cambioTemp("temp1",0)
})

$form.addEventListener("change",e=>{
    cambioTemp(e.target.id,e.target.value)
})
