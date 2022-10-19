const $d=document,
    $contenedor1=$d.querySelector("#container1"),
    $contenedor2=$d.querySelector("#container2"),
    $ul=$d.querySelector("ul"),
    $li3=$d.querySelector("li:nth-child(3)"),
    $parrafos=$d.querySelectorAll("p")

/*
const $contenedor1=$d.querySelector("#container1")
const $li=$d.querySelectorAll(".item2")
const $parrafo=$d.querySelectorAll("p")
const $li3=$d.querySelector("li:nth-child(3)")*/

primero=$contenedor1.firstElementChild.textContent
ultimo=$contenedor1.lastElementChild


//console.log($li3.previousElementSibling)

const $li5=$d.createElement("li")
const $texto=$d.createTextNode("Item 5")
$li5.appendChild($texto) //$li5.append("Item 5")
$ul.appendChild($li5)

//insertar
const $liN=$d.createElement("li")
$liN.append("Insertado")
$ul.insertBefore($liN,$li3)

//eliminar
$ul.lastElementChild.remove()

//sustituir
const $parrafo=$d.createElement("p")
$parrafo.append("parrafo sustituido")
$contenedor1.replaceChild($parrafo,$contenedor1.firstElementChild)

//añadir estilos
$li3.previousElementSibling.previousElementSibling.classList.add("blackwhite")
//eliminarr estilos
$li3.previousElementSibling.previousElementSibling.classList.remove("blackwhite")

//añadir un estilo
$contenedor1.firstElementChild.nextElementSibling.style.backgroundColor="white"

//atributos
$ul.firstElementChild.setAttribute("data-list","4")
//$ul.firstElementChild.removeAtribute("data-list")
$ul.firstElementChild.getAtribute("data-list")

