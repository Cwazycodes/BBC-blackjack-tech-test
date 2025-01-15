const {Hand, Game} = require("../src/game");
const Deck = require("../src/deck");

test("A hand should start with two cards", () => {
  const hand = new Hand(["Ace", "King"]);
  expect(hand.cards.length).toBe(2);
});

test("A hand with a King and Ace scores 21", () => {
  const hand = new Hand(["King", "Ace"]);
  expect(hand.calculateScore()).toBe(21);
});

test("A hand with a 9, Ace, and Ace scores 21", () => {
  const hand = new Hand(["9", "Ace", "Ace"]);
  expect(hand.calculateScore()).toBe(21);
});

test("Player can hit to draw another card", () => {
  const deck = new Deck();
  const game = new Game(deck);

  game.start(["King", "7"]);
  game.hit();
  expect(game.playerHand.cards.length).toBe(3);
});

test("Player can stand and their score is evaluated", () => {
  const deck = new Deck();
  const game = new Game(deck);

  game.start(["King", "7"]);
  game.stand();
  expect(game.getPlayerScore()).toBe(17);
});

test("Player busts when their score exceeds 21", () => {
  const deck = new Deck();
  deck.cards = ["5", "King", "7"];
  const game = new Game(deck);

  game.start(["King", "7"]);
  game.hit(); 

  expect(game.getPlayerScore()).toBeGreaterThan(21);
  expect(game.isBust()).toBe(true);
});

