
// Choosing random winning word and splitting letters into array and "_" into array
var winWordsArr = ["plank", "chest", "parrot", "gold", "pirate", "ship", "sword"];
var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
console.log(winWordRand);
var winWordLetArr = winWordRand.split("");
console.log(winWordLetArr);
var uArr = (winWordLetArr.fill(" _ ", 0));
console.log(uArr);
var replace = document.querySelector("#guessBlanks").innerText = uArr.join(" ");
console.log(replace);

var lives = 7;
var wins = 0;
var allGuess = [];
var isMatch = false;

var begin = function (event) {
    var guess = event.key;
    console.log(guess);
    var isMatch = false;
    for (var i = 0; i < winWordLetArr.length; i++) {
        if (lives > 0 && i < winWordLetArr.length) {
            if (winWordRand.indexOf(guess) != -1) {
                console.log(guess);
                console.log(winWordRand.indexOf(guess));
                uArr[winWordRand.indexOf(guess)] = guess;
                document.querySelector("#guessBlanks").innerText = uArr.join(" ");
                isMatch = true;
                return guess;
            }
            // else (winWordRand.indexOf(guess) === -1 && i < winWordLetArr.length) {
            else {

            }
        }
    }
    if(!isMatch){
        lives--;
    }
    allGuess.push(guess);
    $("#guessesRemain").text(lives);
    $("#win").text(wins);
    $("#guessedLetters").text(allGuess);
}
$("body").on("keyup", begin);

// $("#guessesRemain").text(lives);
// $("#win").text(wins);
// $("#guessedLetters").text(allGuess);



