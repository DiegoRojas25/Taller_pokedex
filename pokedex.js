//Ejercicio 2:

async function buscarPokemon(nombre) {

  const enlace = "https://pokeapi.co/api/v2/pokemon/"+nombre
  const respuesta = await fetch(enlace.toLocaleLowerCase());

  if (!respuesta.ok) {
     console.log("Algo salió mal. Código:", respuesta.status);
     
  }

   const datos = await respuesta.json();
//   console.log(datos.name+": "+datos.id);
   return datos;

}

// buscarPokemon("charizard");
// buscarPokemon("PikacHu");
// buscarPokemon("BulBasaUr");

//Ejercicio 3:
async function mostrarFicha(datos) {

  const   
  if (!datos) {
     console.log("No hay nada para mostrar");
     return;
  }

  const datos = await respuesta.json();
  console.log(datos.name+": "+datos.id)

}




   