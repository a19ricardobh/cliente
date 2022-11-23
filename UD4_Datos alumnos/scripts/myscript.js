const $d=document,
   // $formulario = document.getElementsByTagName("form")[0];
      $formulario = document.forms[0],
      $contactos = document.getElementById("contactos");

// Con createElement
function render1(datos) {
  let $tabla = $contactos.getElementsByTagName("table")[0];

  let $fila = $d.createElement("tr");
  for (let i = 0; i < datos.length; i++) {
    let $celda = $d.createElement("td");
    $celda.appendChild($d.createTextNode(`${datos[i]}`));
    $fila.appendChild($celda);
  }

  $tabla.appendChild($fila);
  $contactos.appendChild($tabla);
}

// Con insertRow
function render2(datos) {
  let $tabla = $contactos.getElementsByTagName("table")[0];

  let $fila = $tabla.insertRow();
  datos.forEach((dato) => {
    let $celda = $fila.insertCell();
    //$celda.appendChild($d.createTextNode(`${dato}`));
    $celda.append(`${dato}`)
    $fila.appendChild($celda);
  });
  $tabla.appendChild($fila);
  $contactos.appendChild($tabla);
}

// Con template
function render3(datos) {
  const $tabla = $contactos.getElementsByTagName("table")[0];
  const $template=$d.querySelector("#template-fila").content

  let $clon=$template.cloneNode(true)
  $clon.querySelectorAll("td").forEach((celda,indice)=>{
    celda.append(datos[indice])
  })
  $tabla.append($clon)
}
//incluir boton
function render4(datos) {
  let $tabla = $contactos.getElementsByTagName("table")[0];

  let $fila = $tabla.insertRow();
  datos.forEach((dato) => {
    let $celda = $fila.insertCell();
    //$celda.appendChild($d.createTextNode(`${dato}`));
    $celda.append(`${dato}`)
    $fila.appendChild($celda);
  });
  const $botonBorrar=$d.createElement("button")
  $botonBorrar.textContent="Borrar"
  //$botonBorrar.setAttribute("id")
  const $botonUpdate=$d.createElement("button")
  $botonUpdate.textContent="Update"
  $celda = $fila.insertCell();
  $celda.append($botonBorrar)
  $celda.append($botonUpdate)
  $fila.appendChild($celda);
  $tabla.appendChild($fila);
  $contactos.appendChild($tabla);
}

function addContact(e) {
  e.preventDefault();

  const datos = [
    $formulario.nombre.value,
    $formulario.apellido.value,
    $formulario.email.value,
    $formulario.fechaNacimiento.value,
    $formulario.telefono.value,
    $formulario.hombre?"Hombre":"Mujer",
    $formulario.estudios.options[$formulario.estudios.selectedIndex].textContent,
  ];
  render4(datos);
  $formulario.reset()
}

$formulario.addEventListener("submit", addContact);

