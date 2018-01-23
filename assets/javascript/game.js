var game = function () {
    // Choosing random winning word and splitting letters into array and "_" into array
    var winWordsArr = ["plank", "treasure", "parrot", "gold", "pirate", "ship"];
    var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
    console.log(winWordRand);
    var winWordLetArr = winWordRand.split("");
    console.log(winWordLetArr);
    var uArr = (winWordLetArr.fill(" _ ", 0));
    console.log(uArr);
    var replace = document.querySelector("#guessBlanks").innerText = uArr.join(" ");
    console.log(replace);

    var guess = prompt("GUESS");
    console.log(guess);
    var lives = 7;
    var wins = 0;
    var allGuess = [];
    document.querySelector("#guessesRemain").innerText = lives;
    document.querySelector("#win").innerText = wins;
    document.querySelector("#guessedLetters").innerText = allGuess;
    for (var i = 0; i < lives; i++) {
        // for (var i = 0; i < winWordLetArr.length; i++) {
            if (winWordRand.indexOf(guess) != -1) {
                console.log(winWordRand.indexOf(guess));
                allGuess.push(guess);
                document.querySelector("#guessedLetters").innerText = allGuess;
                uArr[winWordRand.indexOf(guess)] = guess;
                document.querySelector("#guessBlanks").innerText = uArr.join(" ");
                return guess;
            }
            else {
                // guess = prompt("wrong. guess again");
                allGuess.push(guess);
                document.querySelector("#guessedLetters").innerText = allGuess;
                lives = lives - 1;
                document.querySelector("#guessesRemain").innerText = lives;
                guess = alert("wrong.");
                return guess;
            }
        // }
    }
}