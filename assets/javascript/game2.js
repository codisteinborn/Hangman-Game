// Choosing random winning word and splitting letters into arrays and initiating variables
var winWordsArr = ["plank", "chest", "ocean", "gold", "pirate", "ship", "sword"];
var wordDisplay = document.querySelector("#guessBlanks")
var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
var winWordLetArr = winWordRand.split("");
var uArr = (winWordLetArr.fill(" _ ", 0));
var replace = wordDisplay.innerText = uArr.join(" ");

var lives = 7;
var wins = 0;
var allGuess = [];
var isMatch = false;

var begin = function (event) {
    var guess = (event.key).toLowerCase();
    var isMatch = false;
    allGuess.push(guess);
    for (var i = 0; i < winWordRand.length; i++) {
        if (winWordRand.includes(guess) && lives > 0) {
            uArr[winWordRand.indexOf(guess)] = guess;
            wordDisplay.innerText = uArr.join(" ");
            isMatch = true;
        }
    }
    if (!wordDisplay.innerText.includes("_")) {
        alert("Arrrrrr! Win");
        allGuess = [];
        lives = 7;
        wins = wins + 1;
        // console.log(wins);
        winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
        winWordLetArr = winWordRand.split("");
        uArr = (winWordLetArr.fill(" _ ", 0));
        replace = wordDisplay.innerText = uArr.join(" ");
    }
    if (!isMatch) {
        lives--;
        if (lives === 0) {
            alert("Walk the Plank");
            lives = 7;
            allGuess = [];
            winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
            winWordLetArr = winWordRand.split("");
            uArr = (winWordLetArr.fill(" _ ", 0));
            replace = wordDisplay.innerText = uArr.join(" ");
        }
    }
    // allGuess.push(guess);
    $("#guessesRemain").text(lives);
    $("#win").text(wins);
    $("#guessedLetters").text(allGuess);
}
$("body").on("keyup", begin);