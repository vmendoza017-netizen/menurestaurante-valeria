// Función principal para obtener Pokémon de tipo agua
async function getWaterPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type/water");

    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }

    const data = await response.json();
    const pokemons = data.pokemon.slice(0, 20); // solo 20 para no saturar

    // Llamada a otra función para procesar y mostrar
    displayPokemons(pokemons);
    return pokemons;

  } catch (error) {
    console.error("Ocurrió un problema:", error.message);
  }
}

// Mostrar Pokémon con nombre, imagen y peso
async function displayPokemons(pokemonList) {
  const ul = document.getElementById("pokemon-list");
  ul.innerHTML = ""; // limpiar lista

  const pokemonElements = await Promise.all(
    pokemonList.map(async (p) => {
      const res = await fetch(p.pokemon.url);
      const details = await res.json();

      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "align-items-center", "gap-3");

      const img = document.createElement("img");
      img.src = details.sprites.front_default;
      img.alt = details.name;
      img.width = 50;

      li.innerHTML = `
        <strong>${details.name}</strong>
        <span class="ms-auto">Peso: ${details.weight}</span>
      `;
      li.prepend(img);

      return li;
    })
  );

  pokemonElements.forEach((li) => ul.appendChild(li));
}

// Búsqueda por nombre
function searchPokemon(pokemonList) {
  const input = document.getElementById("search-input").value.toLowerCase();
  const filtered = pokemonList.filter((p) =>
    p.pokemon.name.toLowerCase().includes(input)
  );
  displayPokemons(filtered);
}

// Programa principal
let globalPokemons = [];
getWaterPokemons().then((pokemons) => {
  globalPokemons = pokemons;

  document.getElementById("search-button").addEventListener("click", () => {
    searchPokemon(globalPokemons);
  });
});
