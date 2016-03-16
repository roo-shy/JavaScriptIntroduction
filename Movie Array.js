var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

//Low Budget Movies
var lowBudgetMovie = movies.filter(function(movie){
     return movie.budget <= 100;
});

var lowBudgetMovieTitle = lowBudgetMovie.map(function(movie){
    console.log(movie.title);
    return movie.title;
});

console.log(lowBudgetMovieTitle);

//Movies with L. Dicaprio
function Leo(stars) {
  var found = false;
  stars.forEach(function(star) {
    if (star === "Leonardo DiCaprio") {
      found = true;
    }
  });
  return found;
}

function leoMovie (movie) {
  if(Leo(movie.stars)) {
    return true;
  } else {
    return false;
  }
}

var leoMovies = movies.filter(leoMovie);
var leoMovies = leoMovies.map(function(movie){
      return movie.title;
    });

console.log(leoMovies);
