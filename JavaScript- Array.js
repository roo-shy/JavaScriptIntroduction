var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var words = sentence.replace(/\./g, "");
words = words.split(" ");
console.log(words);

function checkSixChars(word) {
  if(word.length === 6){
    return true;
  } else {
    return false;
  }
}

var sixCharWords = words.filter(checkSixChars);
sixCharWords = sixCharWords.length;
console.log("There are " + sixCharWords + " words with six characters.");

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

// Low Budget
function checkLowBudget (movie) {
  if(movie.budget < 100) {
    return true;
  } else {
    return false;
  }
}
lowBudgetMovies = movies.filter(checkLowBudget);
lowBudgetMovies = lowBudgetMovies.map(function(obj){
   return obj.title;
});
console.log("Low budget movie array: ");
console.log(lowBudgetMovies);

// Movies with L. Dicaprio
function checkStarringLeo (stars) {
  var found = false;
  stars.forEach(function(star) {
    if (star === "Leonardo DiCaprio") {
      found = true;
    }
  });
  return found;
}

function checkLeoMovie (movie) {
  if(checkStarringLeo(movie.stars)) {
    return true;
  } else {
    return false;
  }
}
leoMovie = movies.filter(checkLeoMovie);
leoMovie = leoMovie.map(function(obj){
   return obj.title;
});
console.log("Leonardo DiCaprio movie array: ");
console.log(leoMovie);
