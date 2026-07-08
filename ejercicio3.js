//Parte 3:

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

async function mostrarFicha(nombre1,nombre2) {

  const datos1 = await buscarPokemon(nombre1);
  const datos2 = await buscarPokemon(nombre2);
 
  if (!datos1) {
     console.log(datos1.name+"No hay nada para mostrar");
     return;
  }
    if (!datos2) {
     console.log("No hay nada para mostrar");
     return;
  }

  console.log("\nPokemones: \n"+datos1.name.toUpperCase()+": "+datos1.id+"\n"+datos2.name.toUpperCase()+": "+datos2.id)
  const tipos = [datos1.types[0].type.name,datos2.types[0].type.name]
  console.log("\nTipos: "+tipos.join("/"))
  console.log("\n**************");
  console.log(datos1.name+".\nAltura: "+datos1.height*10+"cm\n"+"Peso: "+datos1.weight/10+"kg\n")
  
  console.log("Estadisticas: ")
for(let i=0;i<datos1.stats.length;i++){

    console.log(datos1.stats[i].stat.name + ": "+ datos1.stats[i].base_stat);

 }
  console.log("\n\nHabilidades: ")
for(let i=0;i<datos1.abilities.length;i++){

   if(datos1.abilities[i].is_hidden==true){
    console.log(datos1.abilities[i].ability.name+" (Oculta)");
   }
   else{
      console.log(datos1.abilities[i].ability.name);
   }
 }
console.log("**************\n");

  console.log("\n**************");
  console.log(datos2.name+".\nAltura: "+datos2.height*10+"cm\n"+"Peso: "+datos2.weight/10+"kg\n")
  
  console.log("Estadisticas: ")
for(let i=0;i<datos2.stats.length;i++){

    console.log(datos2.stats[i].stat.name + ": "+ datos2.stats[i].base_stat);

 }
  console.log("\n\nHabilidades: ")
for(let i=0;i<datos2.abilities.length;i++){

   if(datos2.abilities[i].is_hidden==true){
    console.log(datos2.abilities[i].ability.name+" (Oculta)");
   }
   else{
      console.log(datos2.abilities[i].ability.name);
   }
 }
console.log("**************\n");
}

mostrarFicha("eevee","Mewtwo")

