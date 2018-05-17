var Letter = require("Letter");

function Word(randomWord) {
    this.currentWord = [];

    for(var i = 0; i < randomWord.length; i++) {
        this.currentWord.push(new Letter(randomWord[i]))
    }
}

Word.prototype.outputWordDisplay = function() {
    var outputWord = "";
    this.currentWord.forEach(function(letter) {
        outputWord+=Letter.outputLetterDisplay();
    });
}

Word.prototype.checkGuess = function(userInput) {
    this.currentWord.forEach(function(letter){
        letter.checkGuess();
    });
}

module.exports = Word;