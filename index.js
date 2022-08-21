window.onload = () => {

  const boxes = Array.from(document.getElementsByClassName("box"));

  const resetButton = document.getElementById("reset");

  let state = 1;

  const winner = document.getElementById("winner");

  const turn = document.getElementById("turn");

  let currentPlayer = "X";

  let boxesValue = [];


  turn.textContent = `turn for ${currentPlayer}`;

  boxes.forEach((box) => {

    box.addEventListener("click", (e) => {

      if (box.textContent === "" && state) {

        box.textContent = currentPlayer;

        box.style.color = currentPlayer === "X" ? "#37a987" : "#f4af1b";

        checkForWinner();

        swapTurns();

      }
    });
  });

  resetButton.onclick = () => {

    boxes.forEach((box) => {

      box.textContent = "";

      currentPlayer = "X";

      turn.textContent = `turn for ${currentPlayer}`;

      winner.style.visibility = "hidden";

      state = 1;

    });

    boxesValue = [];
  };

  const checkForWinner = () => {

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

    for (i = 0; i < winingCombinations.length; i++) {

      let winingCombination = winingCombinations[i];

      const a = boxes[winingCombination[0]].textContent;

      const b = boxes[winingCombination[1]].textContent;

      const c = boxes[winingCombination[2]].textContent;


      if (a === "" || b === "" || c === "") {

        continue;
      }

      else if (boxesValue.length === 9 && a !== b && b !== c) {

        winner.textContent = 'No Winner';

        winner.style.visibility = 'visible';

      }

      else if (a === b && b === c) {

        winner.textContent = `Winner is ${currentPlayer}`;

        winner.style.visibility = "visible";

        state = 0;
      }


    }
  };

  const swapTurns = () => {

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    turn.textContent = `turn for ${currentPlayer}`;
  };
};
