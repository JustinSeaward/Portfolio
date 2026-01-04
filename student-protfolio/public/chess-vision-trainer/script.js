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

    // Determine where each piece is on the board.
    const piece = startingPosition[row][col];

    // Checking if there is a piece on a square (not an empty string in the 2D array).
    if (piece !== "") {
      // If the square isnt empty create an img tag for the piece image.
      const pieceImage = document.createElement("img");

      // Set source for the piece image.
      pieceImage.src = `imgs/${piece}.svg`;

      // Place image on the sqaure.
      square.appendChild(pieceImage);
    }

    // if statement to determine light or dark square.
    if ((row + col) % 2 === 1) {
      square.classList.add("dark");
    } else {
      square.classList.add("light");
    }
    square.classList.add("square");

    square.dataset.row = row;
    square.dataset.col = col;

    board.appendChild(square);

    // Square highlight toggle.
    square.addEventListener("click", () => {
      const highlightedSquare = document.querySelector(".highlight");

      if (highlightedSquare !== null && highlightedSquare !== square) {
        // Select the piece(img) to move
        const pieceToMove = highlightedSquare.querySelector("img");
        // If statement to move a piece if a piece is there
        if (pieceToMove !== null) {
          square.appendChild(pieceToMove);
        }
        // Remove old highlighted square
        highlightedSquare.classList.remove("highlight");
      }
      square.classList.toggle("highlight");
    });
  }
}
