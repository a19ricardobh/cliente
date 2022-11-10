const $d=document,
        $formPrecio=$d.querySelector(".formPrecio"),
        $columnas=$formPrecio.querySelector(".columnas"),
        $templateLibro=$d.querySelector("#template-libro").content

//console.log($checkbox)
let libros=[
    {
        titulo:" Java 17 Fundamentos practicos",
        imagen:"images/libro1.jpg",
        precio:45
    },
    {
        titulo:"HTML y CSS",
        imagen:"images/libro2.jpg",
        precio:35
    },
    {
        titulo:"JavaScript",
        imagen:"images/libro3.jpg",
        precio:94
    }
]

$d.addEventListener("DOMContentLoaded",e=>{
  /*   libros.forEach((libro,indice)=>{
        let $div=$d.createElement("div")
        $div.setAttribute("data-id",indice+1)
        $div.classList.add("libro")
        let $strong=$d.createElement("strong")
        $strong.setAttribute("data-id",indice+1)
        $strong.append(libro.titulo)
        let $figure=$d.createElement("figure")
        $figure.setAttribute("data-id",indice+1)
        let $imagen=$d.createElement("img")
        $imagen.setAttribute("data-id",indice+1)
        $imagen.src=libro.imagen
        $figure.appendChild($imagen)
        let $p=$d.createElement("p")
        $p.setAttribute("data-id",indice+1)
        $p.classList.add("linea")
        let $strong2=$d.createElement("strong")
        $strong2.setAttribute("data-id",indice+1)
        $strong2.append(libro.precio.toString()+"Eur")
        let $input=$d.createElement("input")
        $input.setAttribute("data-id",indice+1)
        $input.setAttribute("type","checkbox")
        $input.setAttribute("name","libro")
        $input.setAttribute("value",libro.precio)
        $p.appendChild($strong2)
        $p.appendChild($input)
        $div.appendChild($strong)
        $div.appendChild($figure)
        $div.appendChild($p)
        $columnas.appendChild($div)
 */
//usar fragmentos
let $fragmento=$d.createDocumentFragment()
//usando la etiqueta template:
        libros.forEach((libro,indice)=>{
            let $clon=$templateLibro.cloneNode(true)
            $clon.querySelector("div").setAttribute("data-id",indice+1)
            let $tituloPrecio=$clon.querySelectorAll("strong")
            
            $tituloPrecio[0].append(libro.titulo)
            $tituloPrecio[1].append(libro.precio+"Eur")
            
            $clon.querySelector("img").src=libro.imagen
            
            $clon.querySelector("input").setAttribute("value",libro.precio)
            $fragmento.appendChild($clon)
    })
    $columnas.appendChild($fragmento)
})


$checkbox=$d.getElementsByName("libro")

function calcularTotal(event) {
    let total=0
    for(let checkbox of $checkbox){
        if(checkbox.checked){
            total+=parseFloat(checkbox.value)
        }
    }
    //console.log(total)
    $formPrecio.resultado.value=total
}

$columnas.addEventListener("click",event=>{
   /* if (event.target.getAttribute("type")=="checkbox") {
        calcularTotal(event)
    } */
    let padre=event.target
    while (padre.getAttribute("data-id")==null) {
        padre=padre.parentElement
    }

    padre.classList.toggle("seleccionado")
    if (event.target.getAttribute("type")=="checkbox") {
        padre.querySelector("input")
        calcularTotal(event)
    }
})

$formPrecio.addEventListener("reset",event=>{
    //event.preventDefault()
    $columnas.querySelectorAll("div").forEach($libro=>{
        if($libro.classList.contains("seleccionado")){
            $libro.classList.remove("seleccionado")
        }    
    })  
})