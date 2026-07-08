//parte 5:
const pokemones = ["snorlax","machamp","charizard","squirtle","eevee","Mewtwo"]


async function buscarPokemon(nombre) {

  const enlace = "https://pokeapi.co/api/v2/pokemon/"+nombre
  const respuesta = await fetch(enlace.toLocaleLowerCase());

  if (!respuesta.ok) {
     console.log("Algo salió mal. Código:", respuesta.status);
     return null;
  }

   const datos = await respuesta.json();
   return datos;

}

async function obtenerStat(datos,nombreStat) {


 for(let i=0;i<datos.stats.length;i++){

    if(datos.stats[i].stat.name===nombreStat){
        return datos.stats[i].base_stat;
    }

 }
 return null;
}

async function pokemonMasFuerte(listaNombres,stat) {

    for(let i=0;i<pokemones.length;i++){

        

    }
    
}
