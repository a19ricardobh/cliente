const $d = document,
  $formulario = $d.forms[0],
  $contactos = $d.querySelector("tbody"),
  $submit = $d.querySelector("#add");
datosContactos = [];
// Con template
function render(datosUsuarios) {
  const $tabla = $contactos.getElementsByTagName("table")[0];
  const $template = $d.querySelector("#template-fila").content;
  const $fragmento = $d.createDocumentFragment();

  $contactos.innerHTML = "";
  datosUsuarios.forEach((usuario, i) => {
    let $clon = $template.cloneNode(true);
    const $celdas = $clon.querySelectorAll("td");

    Object.values(usuario).forEach((val, indice) => {
      $celdas[indice].append(val);
    });
    $celdas[$celdas.length - 1].querySelectorAll("a").forEach((enlace) => {
      enlace.setAttribute("data-row", i);
    });
    $fragmento.append($clon);
  });

  $contactos.append($fragmento);
}

function addContact(e) {
  e.preventDefault();

  const datos = {
    nombre: $formulario.nombre.value,
    apellidos: $formulario.apellido.value,
    email: $formulario.email.value,
    fechaNacimiento: $formulario.fechaNacimiento.value,
    telefono: $formulario.telefono.value,
    sexo: $formulario.hombre.checked ? "Hombre" : "Mujer",
    estudios:
      $formulario.estudios.options[$formulario.estudios.selectedIndex]
        .textContent,
  };
  if ($submit.getAttribute("data-row")) {
    let contacto = datosContactos[$submit.getAttribute("data-row")];
    contacto.nombre = datos.nombre;
    contacto.apellidos = datos.apellidos;

    $submit.value = "Añadir";
    $submit.removeAttribute("data-row");
    $contactos.addEventListener("click", procesaAccion);
  } else {
    datosContactos.push(datos);
  }

  render(datosContactos);
  $formulario.reset();
}

$formulario.addEventListener("submit", addContact);
function procesaAccion(e) {
  e.preventDefault();
  switch (e.target.textContent) {
    case "Delete":
      datosContactos.splice(e.target.getAttribute("data-row", 1));
      render(datosContactos);
      break;

    case "Update":
      $formulario.nombre.value =
        datosContactos[e.target.getAttribute("data-row")].nombre;
      $formulario.apellido.value =
        datosContactos[e.target.getAttribute("data-row")].apellido;
      $formulario.email.value =
        datosContactos[e.target.getAttribute("data-row")].email;
      $formulario.fechaNacimiento.value =
        datosContactos[e.target.getAttribute("data-row")].fechaNacimiento;
      $formulario.telefono.value =
        datosContactos[e.target.getAttribute("data-row")].telefono;
      if (datosContactos[e.target.getAttribute("data-row")].sexo == "Hombre") {
        $formulario.hombre.checked = true;
      } else {
        $formulario.mujer.checked;
      }

      Array.from($formulario.estudios.options).forEach((option, i) => {
        if (
          option.textContent ==
          datosContactos[e.target.getAttribute("data-row")].estudios
        ) {
          $formulario.estudios.value = i;
        }
      });
      $submit.value = "Actualizar";
      $submit.setAttribute("data-row", e.target.getAttribute("data-row"));
      $contactos.removeEventListener("click", procesaAccion);
      break;
  }
}
$contactos.addEventListener("click", procesaAccion);

$d.addEventListener("DOMContentLoaded",()=>{
    if (localStorage.getItem("datosContactos")!=null){
        datosContactos=
    }
})