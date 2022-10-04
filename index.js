window.onload = () => {

  "use strict";

  let boxCounter = 0;

  let gameState = true;

  let currentPlayer = "X";
  
  const boxes = Array.from(document.getElementsByClassName("box"));

  const resetButton = document.getElementById("reset");

  const winner = document.getElementById("winner");

  const turn = document.getElementById("turn");

  boxes.forEach((box) => {

    box.addEventListener("click", () => {

      if (box.textContent === "" && gameState) {

        box.textContent = currentPlayer;

        box.style.color = currentPlayer === "X" ? "#37a987" : "#f4af1b";

        if (checkForWinner()) {

        winner.textContent = `Winner is ${currentPlayer}`;

        winner.style.visibility = "visible";

        gameState = false;

        }
        else if (boxCounter === 9 && !checkForWinner()) {

          winner.textContent = `No Winner`;

          winner.style.visibility = "visible";

        }

        else swapTurns();
      }
    });
  });

  resetButton.onclick = () => {

    gameState = true;

    boxCounter = 0;

    currentPlayer = "X";

    turn.textContent = `turn for ${currentPlayer}`;

    winner.style.visibility = "hidden";

    boxes.forEach(box =>  box.textContent = "");

  };

  const checkForWinner = () => {

    boxCounter++;

    const winingCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winingCombinations.length; i++) {

      let winingCombination = winingCombinations[i];

      const a = boxes[winingCombination[0]].textContent;

      const b = boxes[winingCombination[1]].textContent;

      const c = boxes[winingCombination[2]].textContent;


      if (a === b && b === c && a !== "") return true;
    }
    
    return false;
    
  };

  const swapTurns = () => {

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    turn.textContent = `turn for ${currentPlayer}`;
  };

};
