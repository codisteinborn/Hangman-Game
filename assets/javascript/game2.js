// Choosing random winning word and splitting letters into array and "_" into array
var winWordsArr = ["plank", "chest", "ocean", "gold", "pirate", "ship", "sword"];
var wordDisplay = document.querySelector("#guessBlanks")
var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
console.log(winWordRand);
var winWordLetArr = winWordRand.split("");
// console.log(winWordLetArr);
var uArr = (winWordLetArr.fill(" _ ", 0));
console.log(uArr);
var replace = wordDisplay.innerText = uArr.join(" ");

var lives = 7;
var wins = 0;
var allGuess = [];
var isMatch = false;

var begin = function (event) {
    var guess = (event.key).toLowerCase();
    console.log(guess);
    // allGuess.push(guess);
    var isMatch = false;
    for (var i = 0; i < winWordRand.length; i++) {
        console.log(winWordRand, guess, "guess and word");
        console.log("lives", lives)
        if (winWordRand.includes(guess) && lives > 0) {
            // console.log(guess);
            // console.log(winWordRand.indexOf(guess));
            uArr[winWordRand.indexOf(guess)] = guess;
            wordDisplay.innerText = uArr.join(" ");
            isMatch = true;
            console.log("we are doing this")

        }
    }
    console.log(wordDisplay.innerText, "the text")
    if (!wordDisplay.innerText.includes("_")) {
        alert("Arrrrrr! Win")
        lives = 7;
        allGuess = [];
        winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
        console.log(winWordRand);
        winWordLetArr = winWordRand.split("");
        // console.log(winWordLetArr);
        uArr = (winWordLetArr.fill(" _ ", 0));
        // console.log(uArr);
        replace = wordDisplay.innerText = uArr.join(" ");

    }

    if (!isMatch) {
        lives--;
        if (lives === 0) {
            alert("Walk the Plank");
            lives = 7;
            allGuess = [];
            winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
            // console.log(winWordRand);
            winWordLetArr = winWordRand.split("");
            // console.log(winWordLetArr);
            uArr = (winWordLetArr.fill(" _ ", 0));
            // console.log(uArr);
            replace = wordDisplay.innerText = uArr.join(" ");
        }
    }
    allGuess.push(guess);
    $("#guessesRemain").text(lives);
    $("#win").text(wins);
    $("#guessedLetters").text(allGuess);

}
$("body").on("keyup", begin);