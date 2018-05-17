function Letter(character) {
    this.character = character;
    this.guessed = false;
}

Letter.prototype.outputLetterDisplay = function() {
    if (this.guessed) {
        return this.character;
    } else {
        return "_";
    }
}

Letter.prototype.checkGuessed = function() {
    if (userInput === this.character) {
        this.guessed = true;
    }
}

module.exports = Letter;