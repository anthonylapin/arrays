const fs = require('fs');

var rawdata = fs.readFileSync("movies.json");
let movie = JSON.parse(rawdata);

movie.sort(function(a,b) {
	return a.imdbRating - b.imdbRating;
});

movie.forEach(element => console.log(element.Title));

var length = [];
for(var i = 0; i < movie.length; i++){
	length.push(movie[i].Runtime);
	length[i] = length[i].split(" ")[0];
}

console.log(length.reduce( (a,b) => Number(a) + Number(b)));

var total1990 = 0;
for(var i = 0; i < movie.length; i++){
	if(Number(movie[i].Year) > 1990){
		total1990 += Number(length[i]);
	}
}

console.log(total1990);

let directors = new Set();
for(var i = 0; i < movie.length; i++){
	directors.add(movie[i].Director);
}

console.log(directors);
