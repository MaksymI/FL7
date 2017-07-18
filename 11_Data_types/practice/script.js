var votes = ["angular","angular","react","react","react","angular","ember","react","vanilla"];

var vote = function(arr){
	
	var res = {};
	
	for (let i=0; i < arr.length; i++) {
		
		if (!res[arr[i]]) {

			res[arr[i]] = 1;
		
		} else {

			res[arr[i]]++;

		}
	}

	return res;
}


var result = vote(votes); // {angular: 3, react: 4, ember: 1, vanilla: 1}

console.log(result);


var colors = [{
  "favorite_color": "Puce"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Yellow"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Aquamarine"
}, {
  "favorite_color": "Purple"
}, {
  "favorite_color": "Puce"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Yellow"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Khaki"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Green"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Green"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Mauv"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Red"
}, {
  "favorite_color": "Puce"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Red"
}, {
  "favorite_color": "Orange"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Aquamarine"
}, {
  "favorite_color": "Mauv"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Mauv"
}, {
  "favorite_color": "Green"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Yellow"
}, {
  "favorite_color": "Fuscia"
}, {
  "favorite_color": "Indigo"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Red"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Orange"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Fuscia"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Aquamarine"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Fuscia"
}, {
  "favorite_color": "Khaki"
}, {
  "favorite_color": "Yellow"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Violet"
}, {
  "favorite_color": "Turquoise"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Crimson"
}, {
  "favorite_color": "Indigo"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Purple"
}, {
  "favorite_color": "Fuscia"
}, {
  "favorite_color": "Yellow"
}, {
  "favorite_color": "Indigo"
}, {
  "favorite_color": "Teal"
}, {
  "favorite_color": "Green"
}, {
  "favorite_color": "Blue"
}, {
  "favorite_color": "Pink"
}, {
  "favorite_color": "Khaki"
}, {
  "favorite_color": "Goldenrod"
}, {
  "favorite_color": "Maroon"
}, {
  "favorite_color": "Aquamarine"
}, {
  "favorite_color": "Mauv"
}, {
  "favorite_color": "Aquamarine"
}, {
  "favorite_color": "Mauv"
}];


function getUnique (arr) {
	var unique = {};

	for (let i=0; i < arr.length; i++) {

		if (!unique[arr[i].favorite_color]) {

			unique[arr[i].favorite_color] = 1;

		} else {
			
			unique[arr[i].favorite_color]++;
		}
	}

	return unique;
}


var uniqueColors = getUnique(colors);

console.log('How many each of color - ');
console.log(uniqueColors);

var numberOfUniqueColors = Object.keys(uniqueColors).length;

console.log(`How many favorite unique colors - ${numberOfUniqueColors}`);

function uniqueOrderedByMostFavorite (arr) {
	var unique = getUnique(arr);

	return Object.keys(unique).sort(function(a,b){
		return unique[b]-unique[a]
	});
}

var mostFavorite = uniqueOrderedByMostFavorite(colors)[0];

console.log(`The most favorite color - ${mostFavorite}`);