const $d=document,
      $sexo=$d.getElementsByName("sexo"),
      $estudios=$d.querySelector("#estudios"),
      $alumnos=$d.querySelectorAll(".campo"),
      $submit=$d.querySelector(".boton"),
      $tabla=$d.querySelector(".estilo-tabla")

//console.log($sexo)
//console.log($estudios)
//console.log($tabla)



$submit.addEventListener("click",event=>{
    let $tr="",$td=""
    $tr=$d.createElement("tr")
    $alumnos.forEach(e=>{
        //console.log(e.getElementsByTagName("input")[0].value)
        
        $td=$d.createElement("td")
        $tr.appendChild($td)
        $td.append(e.getElementsByTagName("input")[0].value)
    
        
     })
     $tabla.appendChild($tr)
     
    
})