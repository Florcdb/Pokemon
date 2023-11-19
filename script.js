
const getinfobutton = document.getElementById("get-pokemon");
const pokemonSelect = document.getElementById("pokemon-select");
const pokemonarea = document.querySelector(".container");

getinfobutton.addEventListener("click", () => {
  const selectedPokemon = pokemonSelect.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      pokemonarea.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching Pokemon data:", error);
    });
});
