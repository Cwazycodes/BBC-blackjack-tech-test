const Deck = require("../src/deck");

test("A deck should contain 52 cards", () => {
  const deck = new Deck();
  expect(deck.cards.length).toBe(52);
});

test("A deck should have 4 Aces (one for each suit)", () => {
  const deck = new Deck();
  const aces = deck.cards.filter((card) => card.value === "Ace");
  expect(aces.length).toBe(4);
});

test("Deck should shuffle cards", () => {
  const deck1 = new Deck();
  const deck2 = new Deck();

  const order1 = deck1.cards
    .map((card) => `${card.value} of ${card.suit}`)
    .join(",");
  const order2 = deck2.cards
    .map((card) => `${card.value} of ${card.suit}`)
    .join(",");

  expect(order1).not.toBe(order2);
});
