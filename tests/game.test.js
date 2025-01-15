const Hand = require("../src/game");

test("A hand should start with two cards", () => {
  const hand = new Hand(["Ace", "King"]);
  expect(hand.cards.length).toBe(2);
});

test('A hand with a King and Ace scores 21', () => {
    const hand = new Hand(['King', 'Ace']);
    expect(hand.calculateScore()).toBe(21);
});

test('A hand with a 9, Ace, and Ace scores 21', () => {
    const hand = new Hand(['9', 'Ace', 'Ace']);
    expect(hand.calculateScore()).toBe(21);
});
