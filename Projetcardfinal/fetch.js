const textoPrueba = "hola";
const tabla = document.querySelector("#info");
var alimentosConsumo = [];

function cargarAlimentos() {
  fetch("talimentos.json")
    .then((respuesta) => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    .then((alimentos) => {
      alimentos.forEach((alimento, contador) => {
        const row = document.createElement("div");
        row.classList.add("card-container");
        row.innerHTML += `                    
                
                    <p>${alimento.nombre}</p>
                    <img src=${alimento.src} id="imagen">
                    <br>
                    <input type="number" id="gramos-alimento-${contador}" placeholder="0" onchange="alimentosConsumo[${contador}] = this.value" class="hola">                   
                    
                `;
        tabla.appendChild(row);
      });
    }) // Aquí mostramos dicha información
    .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarAlimentos();

function saveAlimentosConsumo() {
  localStorage.setItem("alimentosConsumo", JSON.stringify(alimentosConsumo));
}
