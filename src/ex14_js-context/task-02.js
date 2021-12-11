function Hangman(word) {
  this.word = word;
  this.currentWord = ''.padEnd(word.length, '_');
  this.countError = 6;
  this.wrongSymbols = [];

  this.guess = (letter) => {
    const wordBeforeTurn = this.currentWord;

    for (let i = 0; i < this.word.length; i += 1) {
      if (letter === this.word[i]) {
        this.currentWord = this.replaceLetterInWord(letter, i);
      }
    }

    if (wordBeforeTurn === this.currentWord) {
      this.wrongSymbols.push(letter);
      this.countError -= 1;

      return `wrong letter, errors left ${this.countError} | ${this.wrongSymbols.toString()}`;
    }

    if (this.currentWord === this.word) {
      return ` ${this.currentWord}| You won!`;
    }

    return this.currentWord;
  };
  this.replaceLetterInWord = (letter, index) => {
    const arrayLetters = this.currentWord.split('');

    arrayLetters[index] = letter;

    return arrayLetters.join('');
  };
  this.startAgain = (newWord) => {
    this.word = newWord;
    this.currentWord = ''.padEnd(newWord.length, '_');
    this.countError = 6;
    this.wrongSymbols = [];
  };
  this.getGuessedString = () => this.currentWord;
  this.getErrorsLeft = () => this.countError;
  this.getWrongSymbols = () => this.wrongSymbols;
  this.getStatus = () => `${this.currentWord}| errors left ${this.countError}`;
}

const hangman = new Hangman('webpurple');
module.exports = hangman;
