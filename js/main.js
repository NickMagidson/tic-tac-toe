import Game from "./game.js";

let game = new Game();

game.makeMove(0) // x
game.makeMove(3) // o
game.makeMove(7) // x
game.makeMove(4) // o
game.makeMove(2) // x
game.makeMove(5) // x
console.log(game.board);
console.log(game.findWinConditions());