const $d=document,
        $templateLibros=$d.querySelector("#template-libro").content,
        $librosContenedor=$d.querySelector("#libros-container").querySelector("ul"),
        $buscar=$d.forms["buscarLibros"].querySelector("input"),
        $addLibro=$d.forms["libro-add"],
        $ocultar=$d.querySelector("#ocultar")

let libros=["Eloquent JavaScript",
        "Scope & Closures",
        "Understanding ECMAScript 6",
        "Beginning Node.js",
        "Web development with Node & Express"]


let $fragmento=$d.createDocumentFragment()
libros.forEach(libro=>{
    let $libroClon=$templateLibros.cloneNode(true)
    $libroClon.querySelector(".titulo").append(libro)
    $fragmento.appendChild($libroClon)
})
$librosContenedor.appendChild($fragmento)

$ocultar.addEventListener("change",e=>{
    if (e.target.checked){
        $librosContenedor.style.display="none"
    }else{
        $librosContenedor.style.display="initial"
    }
})

$addLibro.addEventListener("submit",e=>{
    e.preventDefault()
    let $libro=$addLibro.querySelector("input[type=text]")
    let $nuevoLibro=$templateLibros.cloneNode(true)
    $nuevoLibro.querySelector(".titulo").append($libro.value)
    $librosContenedor.appendChild($nuevoLibro)
    $libro.value=""
})


$librosContenedor.addEventListener("click",e=>{
    if (e.target.className=="borrar"){
        let $li=e.target.parentElement
        $librosContenedor.removeChild($li)
    }
})

$buscar.addEventListener("keyup",e=>{
    let texto=e.target.value.toLowerCase()
    const lis=$librosContenedor.querySelectorAll("li")
    lis.forEach(li=>{
        let titulo=li.firstElementChild.textContent.toLowerCase()
        if (titulo.indexOf(texto)!=-1){
            li.style.display="block"
        }else{
            li.style.display="none"
        }
    })
})