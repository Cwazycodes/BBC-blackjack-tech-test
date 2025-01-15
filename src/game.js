class Hand {
    constructor(cards = []) {
        this.cards = cards;
    }

    calculateScore() {
        let total = 0;
        let aces = 0;

        for (let card of this.cards) {
            if (card === 'Ace') {
                aces += 1;
                total += 11;
            } else if (['Jack', 'Queen', 'King'].includes(card)) {
                total += 10;
            } else {
                total += parseInt(card);
            }
        }

        while (total > 21 && aces > 0) {
            total -= 10;
            aces -= 1;
        }

        return total;
    }
}

module.exports = Hand;
