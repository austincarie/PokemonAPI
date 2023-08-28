let pokemonListID = document.querySelector(".id");
let pokemonListName = document.querySelector(".name");
let pokemonListTypes = document.querySelector(".types");
let pokemonListWeight = document.querySelector(".weight");
let pokemonListHeight = document.querySelector(".height");
async function fetchPokes() {       // Here is the start of the new async function
    for (let i = 1; i <= 10; i++) {
    try {                             // After the try keyword this function will wait for the fetch to resolve before going to the next step
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + i
    );
    if (!response.ok) {               // This will check to make sure the response was recieved before moving forward
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displayResults(data);                     // If we received a response call the displayResults() function
  } catch (error) {
    console.error(`Could not get pokemon: ${error}`);
  }}
}
fetchPokes() //Async function call (so it runs when you first open the page)
function displayResults(json) {  //All of your code displaying the results before is down here! Each time the fetchPokes function goes through the loop and and gets results from the API this function is called and the results for each API response displayed
  let pokemonID = json.id;
  let pokemonName = json.name;
  let pokemonTypes;
  if (json.types.length > 1) {
    pokemonTypes = json.types[0].type.name + ", " + json.types[1].type.name;
  } else {
    pokemonTypes = json.types[0].type.name;
  }
  let pokemonWeight = json.weight;
  let pokemonHeight = json.height;
  console.log(pokemonID);
  console.log(pokemonName);
  console.log(pokemonTypes);
  console.log(pokemonWeight);
  console.log(pokemonHeight);
  let listItemID = document.createElement("td");
  listItemID.innerText = pokemonID;
  pokemonListID.appendChild(listItemID);
  let listItemName = document.createElement("td");
  listItemName.innerText = pokemonName;
  pokemonListName.appendChild(listItemName);
  let listItemTypes = document.createElement("td");
  listItemTypes.innerText = pokemonTypes;
  pokemonListTypes.appendChild(listItemTypes);
  let listItemWeight = document.createElement("td");
  listItemWeight.innerText = pokemonWeight;
  pokemonListWeight.appendChild(listItemWeight);
  let listItemHeight = document.createElement("td");
  listItemHeight.innerText = pokemonHeight;
  pokemonListHeight.appendChild(listItemHeight);
}