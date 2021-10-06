const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", "", ]

    const setBoard = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign;
    }

    const getBoard = (index) => {
        if (index > board.length) return;
        return board[index];
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
            
        }
    }
    return {setBoard, getBoard, reset};
})();
    //store board as empty array

    //generate via loop? i < 9,etc (alternatively create in html)
    //const setField 


    //const getField



    //const reset =



    //return {} //Factory way

// displayController
    //lets players make marks on baored
    //takes "taken spots" into account
    
    //player 1

    //player 2




//Checks for when game is over
    //determine winner of looser
    //check for tie
    // let winConditions = wins array 





//redner elements on page