const {Hand, Game} = require("../src/game");
const Deck = require("../src/deck");

test('Player is dealt two cards in the opening hand', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', '7']);
    expect(game.playerHand.cards.length).toBe(2);
});

test('Player hits to draw another card, and score is updated', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', '7']); 
    game.hit(); 

    expect(game.playerHand.cards.length).toBe(3); 
    expect(game.getPlayerScore()).toBeGreaterThan(17); 
});

test('Player stands, receives no further cards, and score is evaluated', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', '7']);
    game.stand();

    expect(game.playerHand.cards.length).toBe(2); 
    expect(game.getPlayerScore()).toBe(17); 
});

test('A hand with score 21 or less is valid', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['10', '7']); 
    expect(game.getPlayerScore()).toBeLessThanOrEqual(21);
    expect(game.isBust()).toBe(false); 
});

test('A hand with score greater than 21 is bust', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', 'Queen']); 
    game.hit(); 
    game.playerHand.cards.push('5'); 

    expect(game.getPlayerScore()).toBeGreaterThan(21);
    expect(game.isBust()).toBe(true);
});

test('A King and an Ace evaluate to a score of 21', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', 'Ace']); 
    expect(game.getPlayerScore()).toBe(21);
    expect(game.isBust()).toBe(false);
});

test('A King, Queen, and an Ace evaluate to a score of 21', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['King', 'Queen', 'Ace']); 
    expect(game.getPlayerScore()).toBe(21);
    expect(game.isBust()).toBe(false);
});

test('A Nine and two Aces evaluate to a score of 21', () => {
    const deck = new Deck();
    const game = new Game(deck);

    game.start(['9', 'Ace', 'Ace']); 
    expect(game.getPlayerScore()).toBe(21);
    expect(game.isBust()).toBe(false);
});

