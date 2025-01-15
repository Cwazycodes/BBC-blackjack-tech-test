const Hand = require("../src/hand");

test("A hand should start with two cards", () => {
  const hand = new Hand(["Ace", "King"]);
  expect(hand.cards.length).toBe(2);
});
