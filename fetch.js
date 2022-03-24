//PAG 1/2

const tabla = document.querySelector("#info");
var alimentosConsumo = [];
let push = document.getElementById("cubo");

// carga del archivo JSON y creo cards con el contenido del JSON

function cargarAlimentos() {
  fetch("talimentos.json")
    .then((respuesta) => respuesta.json())
    .then((alimentos) => {
      alimentos.forEach((alimento, contador) => {
        const row = document.createElement("div");
        row.classList.add("card-container");
        row.innerHTML += `                    
                    <div class="productos">
                    <p>${alimento.nombre}</p>
                    <img src=${alimento.src} id="imagen">
                    <br>
                    <input type="number" id="gramos-alimento-${contador}" placeholder="0" onchange="alimentosConsumo[${contador}] = this.value" class="inputBoton">                   
                    </div>
                `;
        tabla.appendChild(row);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarAlimentos();

// Guardo en un array que había declarado vacío los datos que ha introducido el usuario en el input para llevarmelos a table.js.

function saveAlimentosConsumo() {
  localStorage.setItem("alimentosConsumo", JSON.stringify(alimentosConsumo));
}
