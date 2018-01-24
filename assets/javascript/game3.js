// Choosing random winning word and splitting letters into array and "_" into array
var winWordsArr = ["plank", "chest", "ocean", "gold", "pirate", "ship", "sword"];
var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
console.log(winWordRand);
var winWordLetArr = winWordRand.split("");
// console.log(winWordLetArr);
var uArr = (winWordLetArr.fill(" _ ", 0));
console.log(uArr);
var replace = document.querySelector("#guessBlanks").innerText = uArr.join(" ");

var lives = 7;
var wins = 0;
var charArr = [];
console.log(charArr);
var allGuess = [];
var isMatch = false;

var begin = function (event) {
    var guess = event.key;
    console.log("guess", guess);
    charArr.push(guess);
    // console.log("charArr", charArr.push(guess))
    var isMatch = false;
    for (var i = 0; i < winWordLetArr.length; i++) {
        if (i < winWordLetArr.length) {
            if (winWordRand.indexOf(guess) >= 0 && lives > 0) {
                uArr[winWordRand.indexOf(guess)] = guess;
                document.querySelector("#guessBlanks").innerText = uArr.join(" ");
                isMatch = true;
                console.log("winwordarrletlength", winWordLetArr.length)
                console.log("all guess length", allGuess.length)
                console.log("uarr length", uArr.length)
                return guess;
            }
        }
        else if (lives <= 0) {
            alert("Walk the Plank");
            lives = 7;
            allGuess = [];
            winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
            // console.log(winWordRand);
            winWordLetArr = winWordRand.split("");
            uArr = (winWordLetArr.fill(" _ ", 0));
            // console.log(uArr);
            replace = document.querySelector("#guessBlanks").innerText = uArr.join(" ");
        }
    }
    if (!isMatch) {
        lives--;
    }
    allGuess.push(guess);
    console.log("all guess", allGuess.length);
    $("#guessesRemain").text(lives);
    $("#win").text(wins);
    $("#guessedLetters").text(allGuess);

}
$("body").on("keyup", begin);




