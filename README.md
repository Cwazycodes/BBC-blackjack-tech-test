# BBC Blackjack Tech Test

This project is a simple implementation of a Blackjack game in JavaScript. It includes core gameplay mechanics, deck management, scoring rules, and now supports terminal-based gameplay.

---

## Features

- **Core Gameplay:**
  - A player is dealt an initial hand.
  - The player can "hit" (draw another card) or "stand" (finalize their score).
  - Cards are scored according to standard Blackjack rules, with Aces dynamically valued at 1 or 11.

- **Deck Management:**
  - A deck of 52 standard playing cards.
  - Cards are shuffled using the Fisher-Yates algorithm.

- **Terminal Gameplay:**
  - Play the game directly in the terminal using interactive prompts.

- **Scoring Rules:**
  - Face cards (`Jack`, `Queen`, `King`) are worth 10 points.
  - Aces are worth 11 unless the total score exceeds 21, in which case they count as 1.
  - Cards `2` through `10` are worth their face value.

- **Error Handling:**
  - Invalid card values result in clear error messages.

- **Unit Tests:**
  - The game logic and classes are thoroughly tested using **Jest**.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bbc-blackjack-tech-test.git
   cd bbc-blackjack-tech-test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

4. **Play the game in the terminal**:
   ```bash
   node play.js
   ```

---


## How to Play in the Terminal

1. Run the game:
   ```bash
   node play.js
   ```

2. Follow the prompts:
   - You will be dealt an initial hand and shown your score.
   - Choose to:
     - **Hit**: Draw another card.
     - **Stand**: Finalize your score.

3. The game ends when you either:
   - **Bust**: Your score exceeds 21.
   - **Stand**: Your score is finalized.

4. Example Gameplay:
   ```bash
   Welcome to Blackjack!
   Your starting hand: King of Hearts, 7 of Diamonds
   Your current score: 17
   Do you want to (h)it or (s)tand? h
   You drew: 4 of Clubs
   Your current score: 21
   Do you want to (h)it or (s)tand? s
   You chose to stand.
   Your final score: 21
   Thank you for playing!
   ```

---

## Running Tests

To ensure all functionality works correctly, run:
```bash
npm test
```

---

## Future Improvements

- **Dealer Logic**: Add a dealer hand for full game simulation.
- **Win/Loss Conditions**: Evaluate the outcome based on player and dealer scores.
- **Multiplayer Mode**: Support multiple players.
- **Betting System**: Introduce a betting system with virtual chips.
