var game = function () {
    // Choosing random winning word and splitting letters into array and "_" into array
    var winWordsArr = ["plank", "treasure", "parrot", "gold", "pirate", "ship"];
    var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
    console.log(winWordRand);
    var winWordLetArr = winWordRand.split("");
    console.log(winWordLetArr);
    var uArr = (winWordLetArr.fill(" _ ", 0));
    console.log(uArr);
    var replace = document.querySelector("#guessBlanks").innerText = uArr.join(" ")

    var guess = prompt("GUESS");
    console.log(guess);
    document.querySelector("#guessedLetters").innerText = guess;
    for (var i = 0; i < winWordLetArr.length; i++) {
        if (winWordRand.indexOf(guess) != -1) {
            console.log(winWordRand.indexOf(guess));
            alert("correct");
            return guess;
        }
        else {
            alert("wrong")
            return guess;
        }
    }
    // var game = function (event) {
    // window.addEventListener("keyup", )
    // var win;
    // var lose;
    // var lives = 7;
    // var render = function (guess) {
    //     document.write(" " + guess + " ");
    // }
    // for (var i = 0; i < winWordLetArr.length; i++) {
    //     // if (winWordRand.indexOf(guess) > 0) {
    //     if (guess === winWordLetArr) {
    //         // guess = prompt("Next Letter.")
    //         console.log(guess);
    //         // console.log(lives);
    //         document.querySelector("#guessBlanks").innerText = render();
    //     }
    //     else {
    //         document.querySelector("#guessedLetters").innerText = render();
    //         guess = prompt("Guess Again");
    //         console.log(guess);
    //         lives = lives - 1;
    //         console.log(lives);
    //     }
    // }
    // }
}