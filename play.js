const prompt = require('prompt-sync')();
const { Game } = require('./src/game');
const Deck = require('./src/deck');

function playBlackjack() {
  console.log("Welcome to Blackjack!");
  const deck = new Deck();
  const game = new Game(deck);

  game.start([deck.cards.pop(), deck.cards.pop()]);
  console.log("Your starting hand:", game.playerHand.cards.map(c => `${c.value} of ${c.suit}`).join(', '));
  console.log("Your current score:", game.getPlayerScore());

  while (true) {
    const action = prompt("Do you want to (h)it or (s)tand? ").toLowerCase();

    if (action === 'h') {
      game.hit();
      const lastCard = game.playerHand.cards[game.playerHand.cards.length - 1];
      console.log(`You drew: ${lastCard.value} of ${lastCard.suit}`);
      console.log("Your current score:", game.getPlayerScore());

      if (game.isBust()) {
        console.log("You are bust! Game over.");
        break;
      }
    } else if (action === 's') {
      console.log("You chose to stand.");
      console.log("Your final score:", game.getPlayerScore());
      break;
    } else {
      console.log("Invalid input. Please enter 'h' to hit or 's' to stand.");
    }
  }

  console.log("Thank you for playing!");
}

playBlackjack();
