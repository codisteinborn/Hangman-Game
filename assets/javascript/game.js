// Choosing winning words
var winWords = ["booty", "treasure", "parrot", "gold", "pirate"];
// var spellWinWords{
//     booty: "b", "o", "o", "t", "y",

// }
// choosing random winning word
var rand = winWords[Math.floor(Math.random() * winWords.length)];
console.log(rand);


// prompting users to guess letters
var guess = prompt("Guess a letter");
if(rand.indexOf(guess) > 0){
alert("Correct");
}
else{
alert("Guess Again");
}
