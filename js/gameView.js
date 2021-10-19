export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header-turn">
                    X's turn
                </div>
                <div class="header-status">
                    In Progress
                </div>
                <button type="button" class="header-restart"><span class="material-icons">
                refresh
                </span>
                    <i class="material-icons>refresh</i>
                </button>
            </div>
        `;
    }
}