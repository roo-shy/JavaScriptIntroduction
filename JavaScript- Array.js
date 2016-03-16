var str = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var words = str.replace(/\./g, "").split(" ");

console.log(words);

function checkSixCharWords(word) {
  if(word.length === 6){
    return true;
  } else {
    return false;
  }
}

var sixCharWords = words.filter(checkSixCharWords);
sixCharWords = sixCharWords.length;

console.log(sixCharWords);
