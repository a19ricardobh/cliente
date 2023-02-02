const $d=document,
$diaN=$d.querySelector("#dia"),
$mesN=$d.querySelector("#mes"),
$anoN=$d.querySelector("#ano"),
$edad=$d.querySelector("#edad"),
$submit=$d.querySelector("#submit")

let mes=[31,28,31,30,31,30,31,31,30,31,30,31]

    $submit=addEventListener("click",event=>{

        let diaN=$diaN.value
        //console.log(diaN)
        let mesN=$mesN.value
        let anoN=$anoN.value
        //Validacion mes
        if (isNaN(mesN) || (mesN<1 || mesN>12)) {
            alert("El mes debe ser un numero entre 1 y 12")
        }
        //Validacion dia
        if (isNaN(diaN) || (diaN<1 || diaN>(mes[mesN-1]))) {
            alert(`El dia debe ser un numero entre 1 y ${mes[mesN-1]}`)
        }
        //Validacion año
        if (isNaN(anoN)) {
            alert("El año debe ser un numero de 4 digitos")
        }

        let hoy=new Date()
        let diaH=hoy.getDate()
        //console.log(diaH)
        let mesH=1+hoy.getMonth()
        //console.log(mesH)
        let anoH=hoy.getFullYear()
        //console.log(anoH)

        if (diaN>diaH){
            diaH=diaH+mes[mesH-1]
            mesH--
        }

        if (mesN>mesH){
            mesH=mesH+12
            anoH--
        }
        let d=diaH-diaN
        let m=mesH-mesN
        let a=anoH-anoN
        $edad.innerHTML=`Tu edad es ${a} años, ${m} meses y ${d} dias.`
    })



