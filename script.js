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

    const tieDetector = () => {
        let isBoardFull = true;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === ""){
                isBoardFull = false;
                break;
            }
        }
        return isBoardFull;
    }

    const placeMarker = (index, marker) => {
        if (board[index] === ""){
            board[index] = marker;
            const winner = checkWinner();
            if (winner) {
                console.log(`${winner} has won!`)
                return;
            }
            const tieCheck = tieDetector();
            if (tieCheck) {
                console.log("It's a tie!")
                return;
            }
            return true;
        }
        return false;
    }

    return {getBoard, placeMarker, checkWinner, tieDetector};
})();

function Player (name, marker) {
    return {name, marker};
}

const GameController = (function () {

    // const player1 = Player("Alex", "X");
    // const player2 = Player("Zisha", "O");
    let player1
    let player2
    let currentPlayer

    const getCurrentPlayer = () => currentPlayer;

    function switchCurrentPlayer () {
        if (currentPlayer === player1){
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    const startGame = (player1Marker) => {
        const player2Marker = player1Marker === "X" ? "O" : "X";
        player1 = Player("Player 1", player1Marker);
        player2 = Player("Player 2", player2Marker);
        currentPlayer = player1;
    }

    return {getCurrentPlayer, switchCurrentPlayer, startGame};
})();

const XstartButton = document.getElementById("X-Start");


XstartButton.addEventListener('click', function() {
    GameController.startGame("X");

    const gameBoard = document.getElementById("game-board");
    const start = document.getElementById("start");
    start.style.display = "none";
    gameBoard.style.display = "grid";
    
})

const OstartButton = document.getElementById("O-Start");

OstartButton.addEventListener('click', function() {
    GameController.startGame("O");

    const gameBoard = document.getElementById("game-board");
    const start = document.getElementById("start");
    start.style.display = "none";
    gameBoard.style.display = "grid";
})


for (let i = 0; i <= 8; i++){
    const square = document.getElementById(`sq${i}`);

    square.addEventListener('click', function() {
        let currentPlayer = GameController.getCurrentPlayer();
        let currentMarker = currentPlayer.marker;
        Gameboard.placeMarker(`${i}`, currentMarker);
        square.textContent = currentMarker;
        Gameboard.getBoard();
        GameController.switchCurrentPlayer();
        console.log(`I am square ${i}`);
    })
}
