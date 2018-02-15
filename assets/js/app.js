// var pokemons = document.getElementById('pokemons');

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(function(response) {
//   console.log(response.blob());
// })
// // .then(function(myBlob) {
// //   var objectURL = URL.createObjectURL(myBlob);
// //   pokemons.append(objectURL);
// // });

const containPokes = document.getElementById('pokemons');
const pokeCall = document.getElementById('pokeCall');
const form = document.getElementById('search-form');
let pokeNameSearched;

preloadPokes();

form.addEventListener('submit', function(e) {
	e.preventDefault();
	// responseContainer.innerHTML = '';
	pokeNameSearched = pokeCall.value;
	getPoke();
})

function preloadPokes() {
		const articleRequest = new XMLHttpRequest();
		articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/`);
		articleRequest.onload = firstAddPoke;
		articleRequest.onerror = handleError;
		articleRequest.send();
}

function firstAddPoke() {
	const data = JSON.parse(this.responseText);
	const response = data.results;
	for(let i in response) { 
		const pokeName = data.results[i].name;
		pokeNameSearched = pokeName;
		getPoke()
	};
	
}

function getPoke() {
	const articleRequest = new XMLHttpRequest();
	articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokeNameSearched}`);
	articleRequest.onload = addPoke;
	articleRequest.onerror = handleError;
	articleRequest.send();
}

function handleError () {
  console.log( 'An error occurred 😞' );
}

function addPoke() {
	const data = JSON.parse(this.responseText);
	const response = data.results;
	for(let i in response) { 
		const pokeName2 = data.results[i].name;
		console.log(pokeName2);
		// let content = document.createElement('div');
		// content.appendChild = pokeName;
		// containPokes.appendChild(content);
	};
	
}