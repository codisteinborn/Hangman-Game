var game = function () {
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
    var guess = prompt("GUESS");

    for (var i = 0; i < winWordLetArr.length; i++) {
        while (lives > 0 && i < winWordLetArr.length) {
            if (winWordRand.indexOf(guess) != -1) {
                console.log(guess);
                document.querySelector("#guessesRemain").innerText = lives;
                document.querySelector("#win").innerText = wins;
                document.querySelector("#guessedLetters").innerText = allGuess;
                console.log(winWordRand.indexOf(guess));
                allGuess.push(guess);
                document.querySelector("#guessedLetters").innerText = allGuess;
                uArr[winWordRand.indexOf(guess)] = guess;
                document.querySelector("#guessBlanks").innerText = uArr.join(" ");
                lives = lives;
                guess = prompt("GUESS");
            }
            else if (winWordRand.indexOf(guess) === -1 && i < winWordLetArr.length) {
                // guess = prompt("wrong. guess again");
                allGuess.push(guess);
                document.querySelector("#guessedLetters").innerText = allGuess;
                lives = lives - 1;
                document.querySelector("#guessesRemain").innerText = lives;
                // guess = alert("wrong.");
                guess = prompt("wrong. guess again");;
            }
            else {
                alert("Walk the plank")
            }
        }
    }
}
