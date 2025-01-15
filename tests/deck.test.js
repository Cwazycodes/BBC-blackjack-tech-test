const Deck = require('../src/deck');

test('A deck should contain 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
});
