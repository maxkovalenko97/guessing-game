class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minNumb = min;
    this.maxNumb = max;
  }

  guess() {
    this.guessed = Math.ceil((this.minNumb + this.maxNumb) / 2);
    return this.guessed;
  }

  lower() {
    this.maxNumb = this.guessed;
  }

  greater() {
    this.minNumb = this.guessed;
  }
}

module.exports = GuessingGame;

const number = 998;
const game = new GuessingGame();
game.setRange(0, 6118);

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
