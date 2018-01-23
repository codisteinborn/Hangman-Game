var game = function (event) {
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
var begin = function(){
    // Choosing random winning word and splitting letters into array and "_" into array
    var winWordsArr = ["booty", "treasure", "parrot", "gold", "pirate", "ship"];
    var winWordRand = winWordsArr[Math.floor(Math.random() * winWordsArr.length)];
    console.log(winWordRand);
    var winWordLetArr = winWordRand.split("");
    console.log(winWordLetArr);
    var uArr = (winWordLetArr.fill(" _ ", 0));
    console.log(uArr);
    document.querySelector("#guessBlanks").innerText = uArr.join(" ")
}

    // document.addEventListener('keyup', event)
    // function logletter(event) {
    //     var guess = event.key;
    //     console.log(guess);
    // }

    var guess = prompt("pick a letter")
    // var guess = event.key;
    console.log(guess);
    var lives = 7;
    var render = function (guess) {
        document.write(" " + guess + " ");
    }
    for (var i = 0; i < winWordLetArr.length && lives > 0; i++) {
        if (winWordRand.indexOf(guess) > 0) {
            alert("Correct.");
            prompt("Next Letter.")
            console.log(guess);
            console.log(lives);
            document.querySelector("#guessBlanks").innerText = render();
        }
        else if (lives > 0) {
            document.querySelector("#guessedLetters").innerText = render();
            guess = prompt("Guess Again");
            console.log(guess);
            lives = lives - 1;
            console.log(lives);
        }
        else {
            console.log("You Lose")
        }
    }

    // document.addEventListener("keyup", game);
}
