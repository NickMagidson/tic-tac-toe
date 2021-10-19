import Game from "./game.js";
import GameView from "./gameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById('app'));

// Functions
gameView.onTileClick = function(i) {
    console.log(`Tile clicked: ${i}`)
}

gameView.onRestartClick = function() {
    console.log("Game restarted")
}