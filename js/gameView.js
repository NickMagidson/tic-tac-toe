export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
            <div class="header-turn"></div>
            <div class="header-status"> In Progress</div>
            <button type="button" class="header-restart"> 
                <i class="material-icons">refresh</i>
            </button>
        </div>
        <div class="board">
            <div class="board-tile" data-index="0"></div>
            <div class="board-tile" data-index="1"></div>
            <div class="board-tile" data-index="2"></div>
            <div class="board-tile" data-index="3"></div>
            <div class="board-tile" data-index="4"></div>
            <div class="board-tile" data-index="5"></div>
            <div class="board-tile" data-index="6"></div>
            <div class="board-tile" data-index="7"></div>
            <div class="board-tile" data-index="8"></div>
        </div>
        `;  

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board-tile").forEach(tile => {
            tile.addEventListener('click', () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);  
                }
            })
        })


        this.root.querySelector('.header-restart').addEventListener('click' , () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        })
    }

    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateTurn(game) {
        
    }

    updateStatus(game) {

    }

    updateBoard(game) {
        
    }
}