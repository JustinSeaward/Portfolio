// Author: Justin Seaward
// Description: A chess vision trainer app. Help visulize the line of sight for chess pieces.
// Date: Dec 22, 2025

const board = document.getElementById("board");

// for loop to create the board.
// Loop eight rows
for (let row = 0; row < 8; row++) {
  // Loop eight columns
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");

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
