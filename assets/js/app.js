//traer los elementos del html que se usaran
//traer formulario
const form = document.getElementById('pokeform');//form
//input ingreso nombre pokemon
const searchPoke = document.getElementById('pokeName');// label - input
//contenedor donde ira el resultado
const contenedorPokemon = document.getElementById('contenedorPokemon');
let searchedForPokemon;

//Evento submit del formulario e instrucciones a ejecutar 
form.addEventListener('submit', function (e) {
  e.preventDefault();
	//contenedorPokemon.innerHTML = '';
	searchedForPokemon = searchPoke.value;
	getPokemon();
})

//creando objeto XHR
//creando funcion getPokemon() donde se crearan las peticiones
function getPokemon(){
	//creando objeto con el new
	const pokeRequest = new XMLHttpRequest();
	//abriendo coneccion con el open
	//pokeRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/1/');
	pokeRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForPokemon}`);
	pokeRequest.onload = addPoke;
	pokeRequest.onerror = handleError;
	//enviando la peticion
	pokeRequest.send();
}

function addPoke(){
	// convertir la respuesta que esta en json en una respuesta javascript
	const data = JSON.parse(this.responseText);
	// console.log(data);
	const pokemonName = data.name;
	const pokeImg = data.sprites.front_default;
	const node = `<h1 id=pokename>"${pokemonName}"</h1><img src="${pokeImg}" alt="">`;
  form.innerHTML = node;

}


// funcion que muestra el mensaje de error 
function handleError () {
  console.log( 'An error occurred 😞' );
}