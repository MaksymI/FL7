const getJSON = url => fetch(url).then(response => response.json(), error => {throw error}); 

const getAstros = getJSON('http://api.open-notify.org/astros.json');

console.log(typeof getAstros);

getAstros.then(data => {console.log(data.message)}, error => {console.log(error)});