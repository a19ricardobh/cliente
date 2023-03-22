const $d = document,
  $h1 = $d.querySelector("h1"),
  $boton = $d.querySelector("#jugar"),
  $jugador1 = $d.querySelector(".img1"),
  $jugador2 = $d.querySelector(".img2");

function calcularTirada() {
  return Math.floor(Math.random() * (6 - 1) + 1);
}

function resultado(rdo1, rdo2) {
  if (rdo1 > rdo2) {
    return "&#128681; jugador 1 gana";
  } else if (rdo2 > rdo1) {
    return "jugador 2 gana &#128681;";
  } else {
    return "empate";
  }
}

$boton.addEventListener("click", () => {
  let j1 = calcularTirada();
  let j2 = calcularTirada();
  //console.log($jugador1);
  //console.log(j2);
  $jugador1.setAttribute("src", `imagenes/dado${j1}.png`);
  $jugador2.setAttribute("src", `imagenes/dado${j2}.png`);

  $h1.innerHTML = resultado(j1, j2);
});

/* se ejecuta al recargar la pagina
 $d.addEventListener("DOMContentLoaded", () => {
  let j1 = calcularTirada();
  let j2 = calcularTirada();
  //console.log($jugador1);
  //console.log(j2);
  $jugador1.setAttribute("src", `imagenes/dado${j1}.png`);
  $jugador2.setAttribute("src", `imagenes/dado${j2}.png`);

  $h1.innerHTML = resultado(j1, j2);
}); */
