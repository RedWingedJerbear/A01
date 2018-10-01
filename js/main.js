/**
 * Simple tic-tac-toe game example. 
 * Used the minMax example at https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37 to help implement the AI.
 */
const game = (function () {

  let humanPlayer,
    computerPlayer;

  const cellElements = [
    document.getElementById('upper-left'),
    document.getElementById('upper-mid'),
    document.getElementById('upper-right'),
    document.getElementById('center-left'),
    document.getElementById('center-mid'),
    document.getElementById('center-right'),
    document.getElementById('lower-left'),
    document.getElementById('lower-mid'),
    document.getElementById('lower-right')
  ];


  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {

      if ($("#X").is(":checked")) {
        humanPlayer = "X";
        computerPlayer = "O";
      }
      else {
        humanPlayer = "O";
        computerPlayer = "X";
      }

      // add player's X
      const isValidMove = await addElement(cellElements[i], humanPlayer);

      if (gameOver(cellElements, humanPlayer)) {
        const headingElement = document.createElement("h1");
        let messege = document.createTextNode("You Win!");
        headingElement.appendChild(messege);
        document.getElementById("jumbo").appendChild(headingElement);
      }

      if (isValidMove) {

        // choose computer's O
        const j = await findBestMove(cellElements);

        // pause, then add computer's O
        await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addElement(cellElements[j], computerPlayer);
      }

    });
  }

  async function findBestMove(arr) {
    for (let n = 0; n < arr.length; n++) {
      console.log(arr[n].textContent)
      if (arr[n].textContent === "") {
        return n;
      }
    }
  }

  async function addElement(cellElement, elementType) {
    if (cellElement.textContent != "") { return false; }
    //const headingElement = document.createElement("h1");
    const textNode = document.createTextNode(elementType);
    //headingElement.appendChild(textNode);
    cellElement.appendChild(textNode);
    return true;
  }

  function gameOver(board, player) {
    if (
      (board[0].textContent === player && board[1].textContent === player && board[2].textContent === player) ||
      (board[3].textContent === player && board[4].textContent === player && board[5].textContent === player) ||
      (board[6].textContent === player && board[7].textContent === player && board[8].textContent === player) ||
      (board[0].textContent === player && board[3].textContent === player && board[6].textContent === player) ||
      (board[1].textContent === player && board[4].textContent === player && board[7].textContent === player) ||
      (board[2].textContent === player && board[5].textContent === player && board[8].textContent === player) ||
      (board[0].textContent === player && board[4].textContent === player && board[8].textContent === player) ||
      (board[2].textContent === player && board[4].textContent === player && board[6].textContent === player)
    ) {
      return true;
    }
    else{
      console.log("false")
      return false;
    } 
  }

})();
