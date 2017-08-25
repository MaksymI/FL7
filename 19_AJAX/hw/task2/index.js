const getJSON = (url, init) => fetch(url, init).then(response => response.json(), error => {throw error}); 

const marsWeather = {};
const getMarsWeather = getJSON('http://marsweather.ingenology.com/v1/', {headers:{
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Headers": "Content-Type, Authorization"}
});

getMarsWeather.then(data => {
    console.log(data);
    marsWeather.archive = data.archive;
    marsWeather.latest = data.latest;
}, error => {console.log(error);});


// fetch('http://marsweather.ingenology.com/v1/?format=json', {mode: 'no-cors'})
//     .then(function(response) {
//         return response.arrayBuffer();
//     }, error => {throw error})
//     .then(buffer => {
//         console.log(buffer);
//         // marsWeather.archive = data.archive;
//         // marsWeather.latest = data.latest;
//     }, error => {console.log(error)})


// var brokenJson = function (url, init) {
//     var responseCopy;
//     return fetch(url, init)
//     .then(function (response) {
//         responseCopy = response.clone();
//         return response.json();
//     }).catch(function (err) {
//         if (err instanceof SyntaxError) {
//             return responseCopy.text()
//             .then(function(text) {
//                 console.error(text);
//                 throw err;
//             });
//         }
//         else {
//             throw err;
//         }
//     }).then(function (json) {
//         console.log(json);
//         marsWeather.archive = json.archive;
//         marsWeather.latest = json.latest;
//     });
// };

// brokenJson('http://marsweather.ingenology.com/v1/?format=json', {mode: 'no-cors'});

// var res = fetch('http://marsweather.ingenology.com/v1/?format=json', {mode: 'no-cors'}).then(function(response) {
//     return response.clone().json().catch(function() {
//       return response.text();
//     });
//   });

// res.then(data => console.log(data));

// function streamingRead() {
//     var res;
//     var req = new Request('http://marsweather.ingenology.com/v1/?format=json', {mode: 'no-cors'});
//     fetch(req).then(function(response) {
//       var reader = response.body.getReader();
//       return reader.read();
//     }).then(function(result, done) {
//       if (!done) {
//           res+=result;
//           console.log(res);
//         // do something with each chunk
//       }
//     });
//   }
//   streamingRead();
