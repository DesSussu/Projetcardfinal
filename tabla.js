//PAG 3/3

const tabla = document.querySelector("#lista-alimentos tbody");
const alimentosConsumo = JSON.parse(localStorage.getItem("alimentosConsumo"));
let consumoTotal = 0;

// Vuelvo a cargar el JSON para ahora cargarlos en mi tabla, además de hacer las operaciones para obtener el resultado según los datos que introdujo el usuario y los datos que tenían los alimentos.

function cargarAlimentosConsumo() {
  fetch("talimentos.json")
    .then((respuesta) => respuesta.json())
    .then((alimentos) => {
      alimentos.forEach((alimento, index) => {
        if (alimentosConsumo[index] > 0) {
          const row = document.createElement("tr");
          const subtotalProteinas = calcularProteinas(
            alimentosConsumo[index],
            alimento.equivalencia
          );
          consumoTotal += subtotalProteinas;
          row.innerHTML += `                    
                    
                        <td>${alimento.nombre}</td>
                        <td>${alimentosConsumo[index] || "0"} ${
            alimento.unidad || "gr"
          }</td>
                        <td>${alimento.equivalencia} ${
            alimento.unidad || "gr"
          }</td>
                        <td>${subtotalProteinas} ${
            alimento.unidad || "gr"
          }</td>          
                                   
                        
                    `;
          tabla.appendChild(row);
        }
      });
      document.getElementById("total").textContent = consumoTotal + "gr";
    }) // Aquí mostramos dicha información
    .catch((error) => console.log("Hubo un error : " + error.message));
}

// Función para hacer calculo de todas las proteías que ha consumido el usuario redondeandolo.

function calcularProteinas(unidadesConsumidas, equivalencia) {
  if (unidadesConsumidas) {
    return Math.round((equivalencia / 100) * unidadesConsumidas * 100) / 100;
  }
  return 0;
}

cargarAlimentosConsumo();
