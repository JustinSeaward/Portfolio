// Author: Justin Seaward
// Description: A chess vision trainer app. Help visulize the line of sight for chess pieces.
// Date: Dec 22, 2025

const board = document.getElementById("board");

const startingPosition = [
  ["rd", "nd", "bd", "qd", "kd", "bd", "nd", "rd"],
  ["pd", "pd", "pd", "pd", "pd", "pd", "pd", "pd"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

// for loop to create the board.
// Loop eight rows
for (let row = 0; row < 8; row++) {
  // Loop eight columns
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");

    // logic to determine where each piece it on the board
    const piece = startingPosition[row][col];

    // checking if piece is not an empty string
    if (piece !== "") {
      // if the square isnt empty create an img tag for the piece
      const pieceImage = document.createElement("img");
      pieceImage.src = `imgs/${piece}.svg`;
      square.appendChild(pieceImage);
    }

    // logic to determine light or dark square
    if ((row + col) % 2 === 1) {
      square.classList.add("dark");
    } else {
      square.classList.add("light");
    }
    square.classList.add("square");

    square.dataset.row = row;
    square.dataset.col = col;

    board.appendChild(square);

    // Square highlight toggle on
    square.addEventListener("click", () => {
      const highlightedSquare = document.querySelector(".highlight");

      if (highlightedSquare !== null && highlightedSquare !== square) {
        highlightedSquare.classList.remove("highlight");
      }
      square.classList.toggle("highlight");
    });
  }
}
