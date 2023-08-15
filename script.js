
const dato = "equipo.json"


const juego = document.getElementById("juego");

function mostrarJugadores(equipoArray){
 
  for (const item of equipoArray) {
  
    juego.innerHTML += `<p> ${item.name} ${item.lastname} ${item.age} </p>`; 
  }
}


fetch(dato) /* hicimos el fetch a la constante que va al url, que nos de una respuesta y mostar los items como los habiamos definido previamente en la funcion, sino nos va a saltar un mensaje que dice Error al cargar los datos */
    .then(response => response.json())
    .then(data => {
        const equipoArray = data.jugadores;
        mostrarJugadores(equipoArray);
    })
    .catch(error => {
        console.error("Error al cargar los datos", error);
    });