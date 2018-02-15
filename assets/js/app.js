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
	const responseImg = data.sprites.front_default;
	const responseName = data.name;
	const poke = `<img src="${responseImg}" alt=""><p>${responseName}</p>`;
	// const divs = document.createElement('div');
	// divs.appendChild(node);
	containPokes.innerHTML = poke;

}

// var pokemons = document.getElementById('pokemons');

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(function(response) {
//   console.log(response.blob());
// })
// // .then(function(myBlob) {
// //   var objectURL = URL.createObjectURL(myBlob);
// //   pokemons.append(objectURL);
// // });

// const containPokes = document.getElementById('pokemons');
// const pokeCall = document.getElementById('pokeCall');
// let pokeNameSearched;

// pokeCall.addEventListener('keydown', function(e) {
// 	e.preventDefault();
// 	// responseContainer.innerHTML = '';
// 	pokeNameSearched = pokeCall.value;
// 	getNamePoke();
// })

// function getNamePoke() {
// 	const articleRequest = new XMLHttpRequest();
// 	articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/?limit=800`);
// 	articleRequest.onload = addNamePoke;
// 	articleRequest.onerror = handleError;
// 	articleRequest.send();
// }

// function addNamePoke() {
// 	const data = JSON.parse(this.responseText);
	
// 	for (let i in data)
// 	const responseImg = data.sprites.front_default;
// 	const responseName = data.name;
// 	const poke = `<img src="${responseImg}" alt=""><p>${responseName}</p>`;
// 	containPokes.innerHTML = poke;
	
// }

// function getPoke() {
// 	const articleRequest = new XMLHttpRequest();
// 	articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokeNameSearched}`);
// 	articleRequest.onload = addPoke;
// 	articleRequest.onerror = handleError;
// 	articleRequest.send();
// }

// function handleError () {
//   console.log( 'An error occurred 😞' );
// }

// function addPoke() {
// 	const data = JSON.parse(this.responseText);
// 	const responseImg = data.sprites.front_default;
// 	const responseName = data.name;
// 	const poke = `<img src="${responseImg}" alt=""><p>${responseName}</p>`;
// 	containPokes.innerHTML = poke;
	
// }