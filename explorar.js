//Parte 1:

async function obtenerPokeInfo() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

  if (!respuesta.ok) {
    console.log("Algo salió mal. Código:", respuesta.status);
    return;
  }

  const datos = await respuesta.json();
  //console.log(datos.stats);

 for(let i=0;i<datos.types.length;i++){

     console.log("Tipo: "+datos.types[i].type.name+"\n");

 }

 for(let i=0;i<datos.stats.length;i++){

    console.log(datos.stats[i].stat.name + ": "+ datos.stats[i].base_stat);

 }

for(let i=0;i<datos.abilities.length;i++){

    console.log("\nHabilidad: "+datos.abilities[i].ability.name);

 }

}

obtenerPokeInfo();
