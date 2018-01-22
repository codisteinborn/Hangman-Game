var $ = function (sel) {
    var elem = document.querySelectorAll(sel);

    var text = function (str) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
    }
    var addClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }
    var removeClass = function (className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }
    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }
    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on
    }
    return publicAPI;
}
// Choosing random winning word and splitting letters into array
var winWordsArr = ["booty", "treasure", "parrot", "gold", "pirate", "ship"];
var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
console.log(winWordRand);
var winWordLetArr = winWordRand.split("");
console.log(winWordLetArr);

// var ansArr = [];
// var count = 0;
// var blanks;
// var startGame = function () {
//     for (var i = 0; i < winWordRand.length; i++);
//     {
//         return ansArr[i] = " _ ";
//         console.log(ansArr);
//     }
// blanks = ansArr.join(" ");
// document.getElementById("guessBlanks").innerText = blanks;
// console.log(blanks);
// }
// splitting words into characters and making that many blank spaces
// var randChar = winWordRand.split("");
// console.log(randChar);
// var blanks = "_ ";
// var blankSpaces = blanks.repeat(randChar.length);
// console.log(blankSpaces);
// // var guessBlankSpaces = document.getElementById("guessBlanks");
// // console.log(guessBlankSpaces)
// document.getElementById("guessBlanks").innerText = blankSpaces;



// document.addEventListener('keyup', event)
// function logletter(event) {
//     var guess = event.key;
//     console.log(guess);
// }

var guess = prompt("pick a letter")
console.log(guess);
var lives = 7;
var render = function () {
    document.write(guess);
}
for (var i = 0; i < winWordLetArr.length; i++) {
    if (winWordRand.indexOf(guess) > 0) {
        guess = prompt("Correct. Guess Again!");
        console.log(guess);
    }
    else {
        document.querySelector("#guessedLetters").innerText = render();
        guess = prompt("Guess Again");
        console.log(guess);
        lives = lives - 1
        console.log(lives);
    }
}



