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
let pokeName;

preloadPokes();

form.addEventListener('submit', function(e) {
	e.preventDefault();
	// responseContainer.innerHTML = '';
	pokeName = pokeCall.value;
	getNews();
})

function preloadPokes() {
		const articleRequest = new XMLHttpRequest();
		articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/`);
		articleRequest.onload = addPoke;
		articleRequest.onerror = handleError;
		articleRequest.send();
}

function getNews() {
	const articleRequest = new XMLHttpRequest();
	articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokeName}`);
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
		console.log(data.results[i].name)
		// const pokeName = data.results[i];
		// let content = document.createElement('div');
		// content.appendChild = pokeName;
		// containPokes.appendChild(content);
	};
	
	
}