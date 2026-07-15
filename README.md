# Tic Tac Toe

A modern Tic Tac Toe game built with **React**. Play against another player on the same device, enjoy a clean dark interface, automatic winner detection, and restart the game anytime.

## Preview

![Tic Tac Toe Screenshot](https://res.cloudinary.com/dhjf7rok5/image/upload/v1784121433/samples/website_ss_q4dn22.png)

---

## Features

- Interactive 3×3 game board
- Two-player gameplay
- Automatic turn switching
- Winner detection
- Draw detection
- Prevents playing after the game ends
- Reset game button
- Responsive design for desktop and mobile
- Modern dark UI with Lucide icons

---

## Built With

- React
- JavaScript (ES6+)
- CSS3
- Lucide React

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Ayman-Kz25/Tic-Tac-Toe-Game.git
```

Navigate to the project folder:

```bash
cd tic-tac-toe
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Project Structure

```
src/
│
├── components/
│   └── TicTacToe.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Game Rules

- Players take turns placing **O** and **X**.
- The first player to match three symbols in a row wins.
- Winning combinations include:
  - Horizontal
  - Vertical
  - Diagonal
- If every square is filled without a winner, the game ends in a draw.

---

## How It Works

The game stores the board as an array of nine cells.

```javascript
const [board, setBoard] = useState(Array(9).fill(""));
```

Each move:

1. Updates the selected square.
2. Switches the current player.
3. Checks every winning combination.
4. Declares a winner or draw when appropriate.

---

## License

This project is open source and available under the MIT License.

---

## Author

Created by **Ayman Kz**

GitHub: https://github.com/Ayman-Kz25