const Card = require('./card');

class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10',
            'Jack', 'Queen', 'King', 'Ace'
        ];
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(value, suit));
            }
        }
    }
}

module.exports = Deck;
