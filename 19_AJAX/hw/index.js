// Write a getJSON function which accepts url and returns promise.
// Invocation example:












var getAstros = getJSON('http://api.open-notify.org/astros.json');
typeof getAstros; // -> “object”
getAstros.then(function(data) {
	console.log(data.message); // -> “success”
  }, function(error) {
	console.log(err);
  });
