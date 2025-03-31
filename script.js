const Gameboard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const placeMarker = (index, marker) => {
        if(board[index] === ""){
            board[index] = marker;
            return true;
        }
        return false;
    }

    return {getBoard, placeMarker};
})();

const Player (name, marker) {
    return {name, marker};
}

