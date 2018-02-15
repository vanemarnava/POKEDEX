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
getNews();

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	responseContainer.innerHTML = '';
// 	searchedForText = searchField.value;
// 	getNews();
// })

function getNews() {
	const articleRequest = new XMLHttpRequest();
	articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/1/`);
	articleRequest.onload = addNews;
	articleRequest.onerror = handleError;
	articleRequest.send();
}

function handleError () {
  console.log( 'An error occurred 😞' );
}

function addNews() {
	const data = JSON.parse(this.responseText);
	const response = data.name;
	console.log(response);
	// for(let i in response) { 
	// 	const article = data.response.docs[i];
	// 	const title = article.headline.main;
	// 	const snippet = article.snippet;
	// 	let li = document.createElement('li');
	// 	li.className = 'articleClass';
	// 	li.innerText = snippet;
	// 	responseContainer.appendChild(li);
	// };
	
	
}