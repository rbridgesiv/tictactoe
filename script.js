const Gameboard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const checkWinner = () => {
        // WINNING POSITIONS:
        //    top row [0, 1, 2]
        // middle row [3, 4, 5]
        // bottom row [6, 7, 8]

        //   left column [0, 3, 6]
        // middle column [1, 4, 7]
        //  right column [2, 5, 8]

        //  left diagonal [0, 4, 8]
        // right diagonal [2, 4, 6]

        const winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
                                  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                                  [0, 4, 8], [2, 4, 6]];           // diagonals
        

        for (let i = 0; i < winningPositions.length; i++){
            const [a, b, c] = winningPositions[i];
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]){
                return board[a];
            }
        };
        return null;
    };

    const placeMarker = (index, marker) => {
        if (board[index] === ""){
            board[index] = marker;
            const winner = checkWinner();
            if (winner) {
                console.log(`${winner} has won!`)
            }
            return true;
        }
        return false;
    }

    return {getBoard, placeMarker, checkWinner};
})();

function Player (name, marker) {
    return {name, marker};
}

const GameController = (function () {

    const player1 = Player("Alex", "X");
    const player2 = Player("Zisha", "O");

    let currentPlayer = player1;

    const getCurrentPlayer = () => currentPlayer;

    function switchCurrentPlayer () {
        if (currentPlayer === player1){
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    return {getCurrentPlayer, switchCurrentPlayer};
})();
