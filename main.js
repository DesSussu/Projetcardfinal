//PAG 1/3

let usuario;
let peso;
let actividad = document.getElementsByName("activo");
let calculo;
let identificador;
let boton = document.getElementById("boton");
let user;
let ternario;
let ternarioDos;
let resultado;
calculo = document.getElementById("boton");
let cambioPag = document.getElementById("cambio");

// Función para cuando haga click en calcular según el peso y la cantidad de actividad de una opción

calculo.onclick = function () {
  usuario = document.getElementById("nombre").value;
  localStorage.setItem("usuario", usuario);
  user = localStorage.getItem("usuario");
  ternarioDos = usuario == "" ? alert("Introduce usuario") : user;
  peso = document.getElementById("peso").value;
  ternario = peso > 50 ? elegirPeso() : elegirPesoDos();
  resultado = ternario;
  if (usuario == !"") {
    boton.classList.toggle("active");
  }

  siguente();
};

//Recorro los elementos de actividad para que me den su id y usarlo como parametro para el switch, también cambio su estilo
// cuando pulso algúno de los botones.

for (deportes of actividad) {
  document.getElementById(deportes.id).onclick = function () {
    identificador = this.id;
    console.log(identificador);
    this.classList.toggle("clicados");
  };
}
// Funciones que da uno de los parametros a tener en cuenta para dar el dato de proteínas que necesita una persona con
//las carasterísticas seleccionadas.

function elegirPeso() {
  switch (identificador) {
    case "muy":
      return "290 gramos";
      break;
    case "poco":
      return "190 gramos";
      break;
    case "normal":
      return "90 gramos";
      break;
    case "nada":
      return "590 gramos";
      break;
    default:
      return " UPS...";
      break;
  }
}
function elegirPesoDos() {
  switch (identificador) {
    case "muy":
      return "90 gramos";
      break;
    case "poco":
      return "80 gramos";
      break;
    case "nada":
      return "70 gramos";
      break;
    case "normal":
      return "10 gramos";
      break;
    default:
      return "SIN DATOS";
      break;
  }
}

// Función para cambiar de estilo el botón de calcular y cambiar de estilo la página a la hora de dar el resultado al //usuario.

function siguente() {
  if (user != "") {
    cambioPag.outerHTML = `<div class = "contenedorResultado"><h1 class = "estiloCalculo"> HOLA  ${user.toUpperCase()}, </h1>  <p  class = "resultadoDatos"> Debes de consumir <br> ${resultado} de proteína <br> diariamente según tus <br> datos personales</p></div> <button id="boton" class="active" value="0">
    <h1>Calcular</h1>
  </button>`;
  }
}
