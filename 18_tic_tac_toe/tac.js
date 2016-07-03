$(document).ready(function () {
    var player = 1;  // whose turn is it?  1 or -1

    // The board is represented as a 3x3 grid
    // The outer list is a list of rows.
    // Each inner list is row.
    // Each element in an inner list is a square on the board.
    // 0 for empty, 1 for player X, -1 for player O
    var board = [];

    var i = 0;
    while( i < 3 ) {
        board.push([0,0,0]);
        i = i+1;
    }

$("td").click(function (ev) {
    
    var id = $(ev.target).attr("id");
    if (board[id[0]][id[1]] == 0) {
        board[id[0]][id[1]] = player;

    if (player == 1) {
        $(ev.target).addClass("x").text("x");
    } else {
        $(ev.target).addClass("o").text("o");
    }
 
    player *= -1;
    
    }
});

console.log("hello")
    // 1. When you click on a square, that square should be marked
    // 2. Keep track of the squares used; don't let the player move in a used square
    // 3. Detect when the game is won.
    // 4. Detect when all squares are used without anyone winning.
    // 5. Extra Credit: Add an AI.  Follow some simple rules to play fairly well.

});
