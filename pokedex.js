//Parte 2:

async function buscarPokemon(nombre) {

  const enlace = "https://pokeapi.co/api/v2/pokemon/"+nombre
  const respuesta = await fetch(enlace.toLocaleLowerCase());

  if (!respuesta.ok) {
     console.log("Algo salió mal. Código:", respuesta.status);
     return null;
  }

   const datos = await respuesta.json();
   console.log(datos.name+": "+datos.id);


}

buscarPokemon("charizard");
buscarPokemon("PikacHu");
buscarPokemon("BulBasaUr");






   