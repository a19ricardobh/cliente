const $d = document,
  $contenedor = $d.querySelector(".contenedor");

let $fragmento = $d.createDocumentFragment();
let i = 15;
while (i > 0) {
  let ancho = Math.floor(Math.random() * (300 - 100) + 100);
  let alto = Math.floor(Math.random() * (300 - 100) + 100);
  let $img = $d.createElement("img");
  $img.src = `https://source.unsplash.com/random/${ancho}x${alto}`;
  $fragmento.appendChild($img);
  i--;
}

$contenedor.appendChild($fragmento);
//console.log(crearImagen());
