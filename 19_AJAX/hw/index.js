const getJSON = url => fetch(url); 

const getAstros = getJSON('http://api.open-notify.org/astros.json');

getAstros.then(response => response.json(), error => {console.log(error);})
        .then(data => {console.log(data.message);});
