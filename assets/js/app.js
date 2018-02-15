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

form.addEventListener('submit', function(e) {
	e.preventDefault();
	// responseContainer.innerHTML = '';
	pokeNameSearched = pokeCall.value;
	getPoke();
})

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
	const responseImg = data.sprites.back_default;
	const node = `<img src="${responseImg}" alt="">`;
	// const divs = document.createElement('div');
	// divs.appendChild(node);
	containPokes.innerHTML = node;

	// console.log(node);
		
		// content.appendChild = pokeName;
		// containPokes.appendChild(content);
	
	
}