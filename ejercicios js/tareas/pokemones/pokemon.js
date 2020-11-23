const cardContainer = document.getElementById("cardContainer");

const traerPokemon = async () => {
  try {
    const fetchPokemon = await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
    const pokemonDefinitivo = await fetchPokemon.json();

    pokemonDefinitivo.results.map(async (valor) => {
    
      const urlDefinitiva = await fetch(valor.url);
      const jsonUrl = await urlDefinitiva.json();
      
      const nombre = jsonUrl.name.toUpperCase();
      const id = jsonUrl.id;
      pintarPokemon(nombre, id);
    });
  } catch (error) {
    console.log(error);
  }
};

traerPokemon();

const pintarPokemon = (nombre, id) => {
  const codigoHTML = `<div class="card"><p class="titulo">${nombre}</p> <img class="imagen" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"></div>`;
  cardContainer.innerHTML += codigoHTML;
};
