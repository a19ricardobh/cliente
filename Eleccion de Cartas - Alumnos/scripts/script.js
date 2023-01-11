const $d=document,
    $add=$d.querySelector("#addCarta"),
    $del=$d.querySelector("#delCarta")

    $palo=$d.querySelector("#palo").options
    console.log($palo)
    console.log($palo[$palo.selectedIndex].value)