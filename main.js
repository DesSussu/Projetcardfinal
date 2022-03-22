let usuario;
let peso = document.getElementById("peso").value;
let actividad = document.getElementsByName("activo");
let calculo;
let parrafo;
let parrafoDos;
let identificador;
let boton = document.getElementById("boton");
let user = localStorage.getItem("usuario");
let ternario;
let ternarioDos;
calculo = document.getElementById("boton");
let cambioPag = document.getElementById("cambio");

calculo.onclick = function () {
  usuario = document.getElementById("nombre").value;
  localStorage.setItem("usuario", usuario);
  ternarioDos = usuario == "" ? alert("Introduce usuario") : user;
  ternario = peso >= 50 ? elegirPeso() : elegirPesoDos();
  resultado = ternario;
  console.log(ternario);
};

for (deportes of actividad) {
  document.getElementById(deportes.id).onclick = function () {
    identificador = this.id;
    console.log(identificador);
  };
}
//boton.classList.toggle("active");

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
      return " SIN DATOS";
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
