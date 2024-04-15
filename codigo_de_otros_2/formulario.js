// Correccion ---> En lugar hacer referencia como id  hacerlo como class ya que asi está en el formulario y cambio de variable a constante
const formulario = document.querySelector(".formulario")

// Correccion ---> Se cambia el nombre de la variable de formuclario a formulario
formulario.onsubmit = function (e) {
  // Correccion ---> Evitar el comportamiento por defecto usando e.preventDefault() en lugar de e.prevent()
  e.preventDefault();

  /* 
  Correccion ---> Se cambia las variables var por const
  Correccion ---> Se cambia el nombre de las variables "n" y "e" a "nombre" y "edad"
  */

  const nombre = formulario.elements[0]
  const edad = formulario.elements[1]
  const nacionalidad = formulario.elements[2]

  // Correccion ---> Se cambia 
  const nombreValue = nombre.value
  const edadValue = edad.value
  const indiceNacionalidad = nacionalidad.selectedIndex
  const nacionalidadValue = nacionalidad.options[indiceNacionalidad].value
  console.log(nombreValue, edadValue)
  console.log(nacionalidadValue)

  // Verificar que el campo nombre no tenga numeros o caracteres
  const expresionRegular = /^[a-zA-Z\s]*$/;
  if (!expresionRegular.test(nombreValue)) {
    alert("El nombre solo puede contener letras y espacios");
    return;
  }

  if (nombreValue.length === 0 ) {
    nombre.classList.add("error"); // Corregido el nombre de la variable
  } else {

    nombre.classList.remove("error"); // Eliminar la clase de error si el campo se rellena correctamente
  }

  if (isNaN(edadValue) || edadValue < 18 || edadValue > 120) {
    edad.classList.add("error"); // Corregido el nombre de la variable
  } else {
    // Corregir ---> Se elimina la clase de error si el campo se rellena correctamente
    edad.classList.remove("error"); 
  }

  if (nombreValue.length > 0 && !isNaN(edadValue) && edadValue >= 18 && edadValue <= 120) {
    agregarInvitado(nombreValue, edadValue, nacionalidadValue);
    // Correccion ---> Se agrega el formulario.reset() para limpiar el formulario
    formulario.reset();
  }
}

// Correccion ---> Esté boton es repetivo con la función agregarInvitado, ya esa función se encarga de agregar un botón para invitado
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  console.log("Invitado agregado: " + nombre + " " + edad + " " + nacionalidad)
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  const elementoLista = document.createElement("div");
  // correccion ---> Se cambia added por add
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // correccion ---> Esté codigo es repetido con la función crearElemento, ya que ambos  crean elementos

  // const spanNombre = document.createElement("span")
  // const inputNombre = document.createElement("input")
  // const espacio = document.createElement("br")


  // spanNombre.textContent = "Nombre: "
  // inputNombre.value = nombre
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)

  // creacion de elementos  para un invitado de la lista de invitados

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}