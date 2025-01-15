class Hand {
  constructor(cards = []) {
    this.cards = cards;
  }

  calculateScore() {
    let total = 0;
    let aces = 0;

    for (let card of this.cards) {
      if (["Jack", "Queen", "King"].includes(card)) {
        total += 10;
      } else if (card === "Ace") {
        aces += 1;
        total += 11;
      } else if (!isNaN(parseInt(card))) {
        total += parseInt(card);
      } else {
        throw new Error(`Invalid card value: ${card}`);
      }
      
    }

    while (total > 21 && aces > 0) {
      total -= 10;
      aces -= 1;
    }

    return total;
  }
}

class Game {
  constructor(deck) {
    this.deck = deck;
    this.playerHand = null;
  }

  start(initialCards) {
    this.playerHand = new Hand(initialCards);
  }

  hit() {
    const card = this.deck.cards.pop();
    this.playerHand.cards.push(card);
  }

  stand() {
    return this.getPlayerScore();
  }

  getPlayerScore() {
    return this.playerHand.calculateScore();
  }

  isBust() {
    return this.getPlayerScore() > 21;
  }
}

module.exports = { Hand, Game };
