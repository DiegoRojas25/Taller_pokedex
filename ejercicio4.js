//parte 4:

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

async function compararPokemon(nombre1,nombre2, stat) {

  const datos1 = await buscarPokemon(nombre1);
  const datos2 = await buscarPokemon(nombre2);

  
    if (!datos1||!datos2) {
     console.log("No se pueden comparar");
     return;
    }

  const estat1 = await obtenerStat(datos1,stat);
  const estat2 = await obtenerStat(datos2,stat);

    if (!estat1&&!estat2) {
     console.log("Error! Las unicas stats validas son: \nhp\nattack\ndefense\nspecial-attack\nspecial-defense\nspeed");
     return;
    }  
  
    if(estat1>estat2){
        console.log("\n"+datos1.name+" le gana a "+datos2.name+" en "+stat+"\n");
    }
    else if(estat1<estat2){
        console.log("\n"+datos2.name+" le gana a "+datos1.name+" en "+stat+"\n");
    }
    else{
        console.log("¡Empate!");
    }

}
//1
//Escogí attack porque esta representa el poder ofensivo.
compararPokemon("snorlax","machamp","attack")
//2
compararPokemon("charizard","squirtle","defense")
//3
compararPokemon("pikachu","ditto","fuerza")

