const Gameboard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const checkWinner = () => {
        
    }

    const placeMarker = (index, marker) => {
        if (board[index] === ""){
            board[index] = marker;
            return true;
        }
        return false;
        checkWinner();
    }

    return {getBoard, placeMarker};
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
