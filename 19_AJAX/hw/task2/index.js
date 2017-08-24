const getJSON = (url, init) => fetch(url, init).then(response => response.json(), error => {throw error}); 

const marsWeather = {};
const getMarsWeather = getJSON('http://marsweather.ingenology.com/v1/?format=json', {method: 'GET', mode: 'no-cors'});

getMarsWeather.then(data => {
    console.log(data);
    marsWeather.archive = data.archive;
    marsWeather.latest = data.latest;
}, error => {console.log(error);});

